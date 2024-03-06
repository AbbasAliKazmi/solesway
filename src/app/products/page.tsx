import { Products } from "@/utils/mock";
import Productcard from "@/components/productcard";
import p1 from '../../public/p1.jpg'
import p2 from '../../public/p2.jpg'
import p3 from '../../public/p3.jpg'
import p4 from '../../public/p4.jpg'
import p5 from '../../public/p5.jpg'
import p6 from '../../public/p6.jpg'

const AllProducts = () => {
  return (
 <div className='flex justify-evenly mt-16'> 
        {productChecks.map((product) => (
        <Productcard 
        key={product.id} 
        title={product.name} 
        price= {product.price} 
        img={product.image} 
        />
        ))}
    </div>
  );
}

export default AllProducts;
