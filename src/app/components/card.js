
export default function Card({ value, title, icon, color }) {
  return (
    <div className={`flex flex-col gap-2 p-4 w-1/3 h-20 ${color}`}>
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase text-gray-500 font-medium">{title}</p>
        {icon}
      </div>
      <div className="flex">
        <span className="text-base font-medium text-gray-700">R$</span>
        <span className="text-base font-medium text-gray-700">{value}</span>
      </div>
    </div>
  )
}