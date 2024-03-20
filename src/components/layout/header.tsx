import logo from "../../../public/logo.png";
import Image from "next/image"
import { ShoppingCart, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";

export default function Header() {
    return (
        <div className='flex justify-between items-center py-6 px-8'>
            <Link href={"/"}>
                <Image className="w-20 h-7" src={logo} alt="solesway" />
            </Link>
            <ul className='lg:flex gap-x-10 hidden  sm:block'>
                <li className="text-lg">
                    <Link href={"category/male"}>
                        Male
                    </Link>
                </li>
                <li className="text-lg">
                    <Link href={"category/female"}>
                        Female
                    </Link>
                </li>
                <li className="text-lg">
                    <Link href={"category/kids"}>
                        Kids
                    </Link>
                </li>
                <li className="text-lg">
                    <Link href={"/products"}>
                        All Products
                    </Link>
                </li>
            </ul>
            <div className=" relative flex items-center text-gray-400 focus-within:text-gray-600">
                <Search className="hidden  sm:block absolute ml-3 pointer-events-none " size={26} />
                <Input className="hidden  sm:block pl-10 w-42 border-black rounded-lg" placeholder="What You Looking For?" />
            </div>

             <div className="h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center cursor-pointer">
                <ShoppingCart className="" size={28} />
             </div>

        </div>
    )
}

