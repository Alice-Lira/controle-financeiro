'use client'
import { MdAttachMoney } from "react-icons/md";
import Card from "./card";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";


export default function Header({ input, output, total }) {
    return (
        <div className="w-full absolute top-0 left-0 z-10">
            <div className="w-full absolute top-20 z-20 px-3 lg:px-20 xl:px-40">
                <div className="flex justify-evenly items-center gap-4 px-24">
                    <Card value={input} title={'Entradas'} icon={<BiChevronUpCircle className="text-green-600 text-xl" />} color={"bg-white"} />
                    <Card value={output} title={'Saídas'} icon={<BiChevronDownCircle className="text-red-600 text-xl" />} color={"bg-white"} />
                    <Card value={total} title={'Total'} icon={<MdAttachMoney className="text-gray-100" />} color={"bg-green-400"} />
                </div>
            </div>
        </div>
    )
}