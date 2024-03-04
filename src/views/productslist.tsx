import Productcard from '@/components/productcard'
import p1 from '../../public/p1.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'
import p5 from '../../public/p5.jpg'

const Productslist = () => {
    return (
        <div className='flex justify-evenly mt-16'>
            <Productcard title="Flex Coat" price= {200} img={p1} />
            <Productcard title="Brown Coat" price={592} img={p2}/>
            <Productcard  title="Leather Jacket" price={642} img={p3}/>
            {/* <Productcard title="Blue Jeans Jacket" price={784}/> */}
        </div>

    )
}

export default Productslist