'use client'
import { useEffect, useState } from "react";

export default function Home() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [itens, setItens] = useState([])
  const [errorDescription, setErrorDescription] = useState('')
  const [errorValue, setErrorValue] = useState('')
  const [errorSelectedOption, setErrorSelectedOption] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('itens')
    if(!data) return 
    const itensParsed = JSON.parse(data) 
    if(itensParsed.length > 0) setItens([...itensParsed])
  }, [])

  const handleInputChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleInputChangeValue = (event) => {
    setValue(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    let errorDescriptionMsg = ''
    let errorValueMsg = ''
    let errorSelectedOptionMsg = ''
    
    if(description == '' || description == null) {
      errorDescriptionMsg = '*Campo obrigatório'
    }

    if(value == '' || value == null) {
      errorValueMsg = '*Campo obrigatório'
    }

    if(selectedOption == '' || selectedOption == null) {
      errorSelectedOptionMsg = '*Campo obrigatório'
    }

    setErrorDescription(errorDescriptionMsg)
    setErrorValue(errorValueMsg)
    setErrorSelectedOption(errorSelectedOptionMsg)
    if(errorDescriptionMsg != '' || errorValueMsg != '' || errorSelectedOptionMsg != '') {
      return
    }

    let newItens = [...itens]
    newItens.push({
      name: description,
      value,
      type: selectedOption
    })
    setItens(newItens)
    localStorage.setItem('itens', JSON.stringify(newItens))
  }

  const handeleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    
  }

  return (
    <div>
      <form>
        <div className="bg-white p-3 flex flex-col rounded-md">
          <div className="flex flex-col">
            <label className="text-base mb-1 font-medium">Descrição</label>
            <input 
              className="border-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-black"
              type="text"
              value={description}
              onChange={handleInputChangeDescription}
            />
            {errorDescription && <p className="text-red-600 mt-1 font-medium">{errorDescription}</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-base mb-1 mt-3 font-medium">Valor</label>
            <input 
              className="border-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-black"
              type="number"
              value={value}
              onChange={handleInputChangeValue}
            />
            {errorValue && <p className="text-red-600 mt-1 font-medium">{errorValue}</p>}
          </div>

          <div className="flex gap-3 pt-4 items-center">
            <input 
              type="radio" 
              name="input" 
              value="input" 
              className="h-4 w-4 accent-black"
              checked={selectedOption === 'input'}
              onChange={handeleOptionChange}
            />
            <label className="text-base">Entrada</label>

            <input 
              type="radio" 
              name="output" 
              value="output" 
              className="h-4 w-4 accent-black" 
              checked={selectedOption === 'output'}
              onChange={handeleOptionChange}
            />
            <label className="text-base ">Saída</label>
            {errorSelectedOption && <p className="text-red-600 font-medium">{errorSelectedOption}</p>}
           
          </div>
          
          <div className="pt-5">
            <button 
              className="bg-green-900 text-white px-4 py-3 rounded-lg uppercase text-xs"
              onClick={handleAdd}>
              Adicionar
            </button>
          </div>
        </div>
      </form>
          <div className="relative overflow-x-auto rounded-lg pt-4">
            <table className="text-sm text-left w-full">
              <thead className="text-gray-700 uppercase bg-gray-100 text-xs">
                <tr>
                  <th className="px-6 py-3">Descrição</th>
                  <th className="px-6 py-3">Valor</th>
                  <th className="px-6 py-3">Tipo</th>
                </tr>
              </thead>
              {itens.map((item, index) =>
              <tbody>
                <tr className="bg-white" key={index}>
                  <td className="px-6 py-4 text-gray-900">
                    {item.name}
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    {item.value} 
                  </td>

                  <td className="px-6 py-4">
                    {item.type == 'input' ? 'Entrada' : 'Saída'}
                   
                  </td>
                </tr>
              </tbody>
              )}
            </table>
          </div>
    </div>
  );
}
