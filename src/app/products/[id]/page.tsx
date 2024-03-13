import { products } from '@/utils/mock'
import { StaticImageData } from 'next/image'
import Image from 'next/image'


const getProductsDetail = (id: number | string) => {
    return products.filter((product) => product.id == id)
}

export default function Page({ params }: { params: { id: number } }) {
    const result = getProductsDetail(params.id as number);
    return (
        <div className='flex  mt-16 py-10 flex-wrap'>
            {result.map((product) => (
                <div key={product.id} className='flex justify-between gap-6'>
                    {/* left image */}
                    <div>
                        <Image src={product.image as StaticImageData} alt={product.name} />
                    </div>
                    {/* right content */}
                    <div>
                        <div>
                            <h1 className='text-2xl'>{product.name}</h1>
                            <h2 className='text-base font-semibold text-gray-400'>{product.tagline}</h2>
                        </div>
                        <div>
                            <h3 className='text-xs mt-6 font-semibold'>Select Size</h3>
                            {/* size buttons */}
                            <div className='h-6 w-6 mt-2 duration-300 border rounded-full hover:shadow-xl  '>
                                <button className=' p-2 rounded-md'>S</button>
                                <button className=' p-2 rounded-md'>M</button>
                                <button className=' p-2 rounded-md'>L</button>
                                <button className='p-2 rounded-md'>XL</button>
                            </div>    
                    </div>
                </div>
        </div>
    ))}
</div>
)
}
