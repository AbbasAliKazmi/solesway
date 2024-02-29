import logo from "../../../public/logo.png";
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
export default function Header() {
    return (
        <div className='flex justify-between items-center py-6 px-8'>
            <Image className="w-20 h-7" src={logo} alt="solesway" />
            <ul className='flex gap-x-10  text-lg font-bold'>
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
            <div className="h-10 w-10 rounded-full bg-gray-300 items-center">
                <ShoppingCart size={28} />
            </div>
        </div>
    )
}

