import Productcard from '@/components/productcard'
import { products } from '@/utils/mock'
import { StaticImageData } from 'next/image'


const Productslist = () => {
    const productChecks = products.slice(0,3)
    return (
    <div className='mt-16'> 
        <h3 className="text-blue-700 flex justify-center  font-semibold">PRODUCTS</h3>
        <h2 className="text-gray-700 flex justify-center  font-bold text-4xl">Check What We Have</h2>   
        <div className='flex justify-evenly mt-8'> 
        {
            productChecks.map((product) => (
                <Productcard 
                key={product.id} 
                title={product.name} 
                price= {product.price} 
                img={product.image as StaticImageData}
                category={product.category} 
                id={product.id}
                />
            ))
        }
        </div>
    </div>    

    )
}

export default Productslist