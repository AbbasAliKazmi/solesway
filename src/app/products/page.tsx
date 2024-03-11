import { products } from "@/utils/mock";
import Productcard from "@/components/productcard";
import { StaticImageData } from "next/image";


const AllProducts = () => {
  return (
 <div className='flex justify-evenly mt-16 py-10 flex-wrap'> 
        {products.map((product) => (
        <Productcard 
        key={product.id} 
        title={product.name} 
        price= {product.price} 
        img={product.image as StaticImageData} 
        category={product.category}
        id={product.id}
        />
        ))}
    </div>
  );
}

export default AllProducts;
