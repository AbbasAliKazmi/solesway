import Image, { StaticImageData } from 'next/image'
import { Button } from "@/components/ui/button"



function Productcard(props:{title:string,price: number , img: StaticImageData}){
    return (
        <div className="transform hover:scale-105 transition-all">
            <Image src={props.img} alt="product 1" />
            <h3 className='font-bold text-lg  mt-2'>{props.title}</h3>
            <h3 className='font-bold text-lg  mt-1'>${props.price}</h3>
            <Button className="bg-black h-8 px-4 mt-1">Add to Cart</Button>
        </div>
    )
}

export default Productcard