export default function Card() {
    return (
        <div className="w-full absolute top-0 left-0 z-10">
            <div className="w-full absolute top-16 z-20 px-3"> 
                <div className="bg-white p-3 rounded-md flex justify-evenly items-center">
                    <div className="flex flex-col">
                        <p className="text-base text-gray-500 font-medium">Entradas</p>
                        <div className="flex gap-2 pt-2">
                            <span className="font-bold text-lg">R$</span>
                            <span className="font-bold text-lg">1.500</span>
                        </div>

                    </div>

                    <div className="flex flex-col ">
                        <p className="text-base text-gray-500 font-medium">Saídas</p>
                        <div className="flex gap-2 pt-2">
                            <span className="font-bold text-lg">R$</span>
                            <span className="font-bold text-lg">1.500</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}