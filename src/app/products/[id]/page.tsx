import { products } from '@/utils/mock'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import Quantity from '@/components/quantity'
import { Button } from '@/components/ui/button'


const getProductsDetail = (id: number | string) => {
    return products.filter((product) => product.id == id)
}

const sizes = ['XS','S', 'M', 'L', 'XL'];

export default function Page({ params }: { params: { id: number } }) {
    const result = getProductsDetail(params.id as number);
    return (
        <div className='flex  mt-16 py-10 flex-wrap px-20'>
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
                            <h2 className='text-base font-semibold text-gray-600'>{product.tagline}</h2>
                        </div>
                        <div>
                            <h3 className='text-xs mt-6 font-semibold '>SELECT SIZE</h3>
                            {/* size buttons */}
                        <div className='flex gap-x-3'>
                            {
                                sizes.map((item) => {
                                    let a;

                                    return (
                                        <div className='center h-6 w-6 mt-2 duration-300 border rounded-full hover:shadow-xl '>
                                            <span className='text-gray-600 text-sm font-semibold text-center'>{item}</span>
                                        </div>
                                    )
                                })}
                        </div>  
                        {/* quzntity */}   
                        <div className='flex items-center mt-6 gap-x-3'>
                            <h3 className='text-[15px] font-semibold'>Quantity:</h3>
                         <Quantity/>
                        </div>   
                        {/* Add To Cart */}
                        <div className='flex items-center mt-4'>
                         <Button className="bg-black h-8 px-4 mt-1">Add to Cart</Button>
                         <h2 className='ml-8 font-bold text-2xl'>${product.price.toFixed(2)}</h2>
                        </div>
        </div>

    </div>
    </div>
    ))}
    </div>
    )
    }
