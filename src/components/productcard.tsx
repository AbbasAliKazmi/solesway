import Image, { StaticImageData } from 'next/image'
import { Button } from "@/components/ui/button"



function Productcard(props:{title:string,price: number , img: StaticImageData , category:string}){
    return (
        <div className="transform hover:scale-105 transition-all py-5">
            <Image src={props.img} alt="product" />
            <h3 className='font-bold text-xl  mt-2'>{props.title}</h3>
            <h3 className='font-bold text-lg  '>${props.price}</h3>
            <h3 className='font-bold text-lg  '>Category{" "} <span className='text-base font-normal capitalize'>{props.category}</span></h3>
            <Button className="bg-black h-8 px-4 mt-1">Add to Cart</Button>
        </div>
    )
}

export default Productcard