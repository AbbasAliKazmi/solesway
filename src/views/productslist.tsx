import Productcard from '@/components/productcard'
import { products } from '@/utils/mock'
import { StaticImageData } from 'next/image'


const Productslist = () => {
    const productChecks = products.slice(0,3)
    return (
<div className='mt-16'> 
    <h3 className="text-blue-700 flex justify-center font-semibold">PRODUCTS</h3>
    <h2 className="text-gray-700 flex justify-center font-bold text-4xl">Check What We Have</h2>   
    <div className='lg:flex block justify-evenly mt-8'> 
        {productChecks.map((product, index) => (
            <div key={product.id} className={`lg:w-1/4 md:w-1/2 w-full px-4 mb-4 ${index === 0 ? 'block' : 'hidden md:block'}`}>
                <Productcard 
                    title={product.name} 
                    price={product.price} 
                    img={product.image as StaticImageData}
                    category={product.category} 
                    id={product.id}
                />
            </div>
        ))}
    </div>
</div>

   

    )
}

export default Productslist