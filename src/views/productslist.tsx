import Productcard from '@/components/productcard'
import p1 from '../../public/p1.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'
import p5 from '../../public/p5.jpg'
import p6 from '../../public/p6.jpg'



const Productslist = () => {
    return (
    <div> 
        <h3 className="text-blue-700 flex justify-center  font-semibold">PRODUCTS</h3>
        <h2 className="text-gray-700 flex justify-center  font-bold text-4xl">Check What We Have</h2>   
        <div className='flex justify-evenly mt-16'> 
            <Productcard title="Plain Hoodie" price= {200} img={p1} />
            <Productcard title="Long Coat" price={590} img={p2}/>
            <Productcard  title="Rip Jeans" price={350} img={p3}/>
            {/* <Productcard  title="Kids Wear" price={499} img={p4}/> */}
            {/* <Productcard title="Business Suit" price={899} img={p5}/> */}
            {/* <Productcard title="Man T-Shirt" price={450} img={p6}/> */}
        </div>
    </div>    

    )
}

export default Productslist