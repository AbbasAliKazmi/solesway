import { Link } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
    <div>  
      <div className="h-px w-full bg-black"></div>   

        <div className='flex justify-between items-center py-6 px-8'> 
            <div className="w-1/3" >
                <h1 className='text-2xl font-semibold'>SoleSway</h1>
                <p className='text-xs text-gray-600'>© 2021 SoleSway</p>
            </div>
            <div className="w-1/3" >
                <p className='text-xs text-gray-600'>Designed By</p>
                <h1 className='text-2xl font-semibold'>Abbas Studio</h1>
            </div>
            <div className="w-3/3" >
                <p className='text-xs text-gray-600'>Code By</p>
                <h1 className='text-2xl font-semibold'>Abbas Ali</h1>
            </div>
            

        </div>
    </div>    
    )

}
