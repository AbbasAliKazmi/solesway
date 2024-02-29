import logo from "../../../public/logo.png";
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function Header() {
    return (
        <div className='flex justify-between items-center py-6 px-8'>
            <Image className="w-20 h-7" src={logo} alt="solesway" />
            <ul className='flex gap-x-10  text-lg '>
                <li>
                    <Link href={"/"}>
                        Male
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Female
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        Kids
                    </Link>
                </li>
                <li>
                    <Link href={"/"}>
                        All Products
                    </Link>
                </li>
            </ul>
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
            <Search className="absolute ml-3 pointer-events-none " size={26}/> 
            <Input  className=" pl-10 w-42 border-black rounded-lg" placeholder="What You Looking For?"/>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center">
                <ShoppingCart className="" size={28} />
            </div>
        </div>
    )
}

