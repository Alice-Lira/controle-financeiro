'use client'
import { useEffect, useState } from "react";
import Header from "./components/header";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Home() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [itens, setItens] = useState([])
  const [errorDescription, setErrorDescription] = useState('')
  const [errorValue, setErrorValue] = useState('')
  const [errorSelectedOption, setErrorSelectedOption] = useState('')
  const [errorCategory, setErrorCategory] = useState('')
  const [errorDate, setErrorDate] = useState('')
  const [input, setInput] = useState(0)
  const [output, setOutput] = useState(0)
  const [selectCategory, setSelectCategory] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const data = localStorage.getItem('itens')
    if (!data) return
    const itensParsed = JSON.parse(data)
    if (itensParsed.length > 0) setItens([...itensParsed])
  }, [])

  useEffect(() => {
    let totalInput = 0
    let totalOutput = 0

    itens.forEach((item) => {
      if (item.type == 'input') {
        totalInput += Number(item.value)
      }
      if (item.type == 'output') {
        totalOutput += Number(item.value)
      }
    })
    setInput(totalInput)
    setOutput(totalOutput)
  }, [itens])

  const handleInputChangeDescription = (event) => {
    setDescription(event.target.value)
    setErrorDescription('')
  }

  const handleInputChangeValue = (event) => {
    setValue(event.target.value)
    setErrorValue('')
  }

  const handleSelectChange = (event) => {
    setSelectCategory(event.target.value)
    setErrorCategory('')
  }
  const handleAdd = (event) => {
    event.preventDefault()
    let errorDescriptionMsg = ''
    let errorValueMsg = ''
    let errorSelectedOptionMsg = ''
    let errorCategoryMsg = ''
    let errorDateMsg = ''

    if (description == '' || description == null) {
      errorDescriptionMsg = '*Campo obrigatório'
    }

    if (value == '' || value == null) {
      errorValueMsg = '*Campo obrigatório'
    }

    if (selectedOption == '' || selectedOption == null) {
      errorSelectedOptionMsg = '*Campo obrigatório'
    }

    if (selectCategory == '' || selectCategory == null) {
      errorCategoryMsg = '*Campo obrigatório'
    }

    if (date == '' || date == null) {
      errorDateMsg = '*Campo obrigatório'
    }

    setErrorDescription(errorDescriptionMsg)
    setErrorValue(errorValueMsg)
    setErrorCategory(errorCategoryMsg)
    setErrorSelectedOption(errorSelectedOptionMsg)
    setErrorDate(errorDateMsg)
    if (errorDescriptionMsg != '' || errorValueMsg != '' || errorSelectedOptionMsg != '' || errorCategory != '' || errorDateMsg) {
      return
    }

    let newItens = [...itens]
    const [year, month, day] = date.split('-');
    newItens.push({
      name: description,
      value,
      type: selectedOption,
      category: selectCategory,
      date: `${day}/${month}/${year}`
    })
    setItens(newItens)
    setDescription('')
    setValue('')
    setDate('')
    setSelectCategory('')
    setSelectedOption('input')
    localStorage.setItem('itens', JSON.stringify(newItens))
  }

  const handeleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    setErrorSelectedOption('')
  }
  const handleDateChange = (event) => {
    setDate(event.target.value)
    setErrorDate('')
  }

  const handleDelete = (indexToDelete) => {
    const newData = itens.filter((_, index) => index !== indexToDelete)
    setItens(newData)
    localStorage.setItem('itens', JSON.stringify(newData))
  }

  return (
    <div>
      <Header input={input} output={output} total={input - output} />
      <form>
        <div className="bg-white p-3 gap-4 flex flex-col rounded-md">
          <div className="lg:flex-row gap-3 flex flex-col">
            <div className="flex flex-col w-full">
              <label className="text-base mb-1 font-medium">Descrição</label>
              <input
                className="border-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-black"
                type="text"
                value={description}
                onChange={handleInputChangeDescription}
              />
              {errorDescription && <p className="text-red-600 mt-1 font-medium text-sm">{errorDescription}</p>}
            </div>

            <div className="flex flex-col w-full">
              <label className="text-base mb-1 font-medium">Valor</label>
              <input
                className="border-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-black"
                type="number"
                value={value}
                onChange={handleInputChangeValue}
              />
              {errorValue && <p className="text-red-600 mt-1 font-medium text-sm">{errorValue}</p>}
            </div>

            <div className="flex flex-col w-full">
              <p className="text-base font-medium mb-1">Categoria</p>
              <select
                className=" p-1 border border-gray-400 rounded text-gray-700 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                id="options"
                value={selectCategory}
                onChange={handleSelectChange}
              >
                <option value="">Selecione uma opção</option>
                <option value="Casa">Casa</option>
                <option value="Aluguel">Aluguel</option>
                <option value="Pessoal">Pessoal</option>
              </select>
              {errorCategory && <p className="text-red-600 mt-1 font-medium text-sm">{errorCategory}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-base mb-1 font-medium">Data</label>
              <input
                className="border-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-black"
                type="date"
                value={date}
                onChange={handleDateChange}
              />
              {errorDate && <p className="text-red-600 font-medium text-sm mt-1">{errorDate}</p>}
            </div>
          </div>

          <div className="flex gap-3 items-center">
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
            <label className="text-base">Saída</label>
            {errorSelectedOption && <p className="text-red-600 font-medium text-sm ">{errorSelectedOption}</p>}
          </div>
          <div className="flex justify-end">
            <button
              className="bg-violet-900 text-white px-4 py-3 rounded-lg uppercase text-xs w-full md:w-1/3 hover:bg-violet-500"
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
              <th className="px-6 py-3">Categoria</th>
              <th className="px-6 py-3">Data</th>
              {/* <th className="px-6 py-3"></th> */}
            </tr>
          </thead>
          <tbody>
            {itens.map((item, index) =>
              <tr className="bg-white border border-b" key={index}>
                <td className="px-6 py-4 text-gray-900">
                  {item.name}
                </td>

                <td className="px-6 py-4">
                  <p className={item.type == 'input' ? 'text-green-600' : 'text-red-600'}>
                    R${item.value}
                  </p>

                </td>

                <td className="px-6 py-4">
                  {item.category}
                </td>

                <td className="px-6 py-4 text-gray-900 flex items-center justify-between">
                  {item.date}
                  <button onClick={() => handleDelete(index)}>
                    <RiDeleteBin6Line className="text-red-600" />
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
