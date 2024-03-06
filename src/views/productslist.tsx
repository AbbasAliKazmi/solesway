import Productcard from '@/components/productcard'
import { products } from '@/utils/mock'





const Productslist = () => {
    const productChecks = products.slice(0,3)
    return (
    <div> 
        <h3 className="text-blue-700 flex justify-center  font-semibold">PRODUCTS</h3>
        <h2 className="text-gray-700 flex justify-center  font-bold text-4xl">Check What We Have</h2>   
        <div className='flex justify-evenly mt-16'> 
        {
            productChecks.map((product) => (
                <Productcard key={product.id} title={product.name} price= {product.price} img={product.image} />
            ))
        }
            {/* <Productcard title="Plain Hoodie" price= {200} img={p1} />
            <Productcard title="Long Coat" price={590} img={p2}/>
            <Productcard  title="Rip Jeans" price={350} img={p3}/> */}
            {/* <Productcard  title="Kids Wear" price={499} img={p4}/> */}
            {/* <Productcard title="Business Suit" price={899} img={p5}/> */}
            {/* <Productcard title="Man T-Shirt" price={450} img={p6}/> */}
        </div>
    </div>    

    )
}

export default Productslist