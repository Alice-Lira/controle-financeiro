export default function Card() {
    return (
        <div className="flex items-center justify-center w-full absolute top-0 left-0 z-10">
            <div className="bg-white w-1/2 absolute top-16 z-20 rounded-md p-3"> 
                <p className="text-base text-gray-500 font-medium">Entradas</p>
                <div className="flex gap-2 pt-3 justify-center">
                    <span className="font-bold text-lg">R$</span>
                    <span className="font-bold text-lg">1.500</span>
                </div>
            </div>
        </div>
    )
}