'use client'
import { useState } from "react";

export default function Home() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [selectedOption, setSelectedOption] = useState('')

  const handleInputChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleInputChangeValue = (event) => {
    setValue(event.target.value)
  }

  const handleAdd = () => {
    alert('adicionado')
  }

  const handeleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <div>
      <form>
        <div className="bg-white p-3 flex flex-col rounded-md">
          <div className="flex flex-col">
            <label className="text-base mb-1">Descrição</label>
            <input 
              className="border-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-black"
              type="text"
              value={description}
              onChange={handleInputChangeDescription}
            />
            
          </div>

          <div className="flex flex-col">
            <label className="text-base mb-1 mt-3">Valor</label>
            <input 
              className="border-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-black"
              type="number"
              value={value}
              onChange={handleInputChangeValue}
            />
          </div>

          <div className="flex gap-3 pt-4 items-center">
            <input 
              type="radio" 
              name="options" 
              value="option1" 
              className="h-4 w-4"
              checked={selectedOption === 'option1'}
              onChange={handeleOptionChange}
            />
              
            <label className="text-base ">Entrada</label>
            <input 
              type="radio" 
              name="options" 
              value="option2" 
              className="h-4 w-4" 
              checked={selectedOption === 'option2'}
              onChange={handeleOptionChange}
            />
            <label className="text-base ">Saída</label>
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
    </div>
  );
}
