
export default function Home() {
  return (
    <div>
      <form>
        <div className="bg-white p-3 flex flex-col rounded-md">
          <div className="flex flex-col">
            <label className="text-base mb-1">Descrição</label>
            <input className="border-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-black"></input>
          </div>

          <div className="flex flex-col">
            <label className="text-base mb-1 mt-3">Valor</label>
            <input className="border-gray-400 border rounded focus:outline-none focus:ring-1 focus:ring-black" type="number"></input>
          </div>

          <div className="flex gap-3 pt-4 items-center">
            <input type="radio" name="entrada" value="entrada" className="h-4 w-4"></input>
            <label className="text-base ">Entrada</label>
            <input type="radio" name="saida" value="saida" className="h-4 w-4"></input>
            <label className="text-base ">Saída</label>
          </div>
          
          <div className="pt-5">
            <button className="bg-green-900 text-white px-4 py-3 rounded-lg uppercase text-xs">Adicionar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
