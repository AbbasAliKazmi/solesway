import Image, { StaticImageData } from 'next/image'



function Productcard(props:{title:string,price: number , img: StaticImageData}){
    return (
        <div className="transform hover:scale-105 transition-all">
            <Image src={props.img} alt="product 1" />
            <h3 className='font-bold text-lg  mt-3'>{props.title}</h3>
            <h3 className='font-bold text-lg  mt-3'>${props.price}</h3>
        </div>
    )
}

export default Productcard