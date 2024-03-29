import { Button } from "../ui/button";
import Image from "next/image";
import ph1 from "public/ph1.jpg";
import Link from "next/link";

export default function ProdHighlight() {
    return (
        <div className='py-10 px-7 mt-10 md:mt-24'>
            {/* Top Left Heading  */}
            <div className="flex flex-col items-center md:items-end py-10 md:justify-end md:mr-28 ">
                <h1 className="font-extrabold text-4xl text-center md:text-right leading-10 font-serif	">
                    Unique and <br /> Authentic Vintage <br />Designer Jewellery</h1>
            </div>
            {/* Lower Sec Div */}
            <div className="lg:flex block justify-between gap-x-3">
                {/* sec 1 */}
                <div className="lg:w-1/4 w-full flex lg:block">
                    <div>
                        <h2 className="py-4 font-bold">Using Good Quality<br /> Materials</h2>
                        <p className="text-sm text-gray-600">Discover our latest collection <br />
                        of unique and authentic vintage <br /> designer jewellery</p>
                    </div>

                    <div className="">
                        <h2 className="py-4 font-bold">Modern Fashion<br /> Design</h2>
                        <p className="text-sm text-gray-600">Discover our latest collection <br /> 
                        of unique and authentic vintage <br /> designer jewellery</p>
                    </div>
                </div>
                {/* sec 2 */}
                <div className="lg:w-1/4 w-full flex lg:block">
                    <div>
                        <h2 className="py-4 font-bold">100% Handmade<br />  Products</h2>
                        <p className="text-sm text-gray-600">Discover our latest collection<br />
                        of unique and authentic vintage<br /> designer jewellery</p>
                    </div>

                    <div>
                        <h2 className="py-4 font-bold">Discount for Bulk<br /> Orders</h2>
                        <p className="text-sm text-gray-600">Discover our latest collection<br /> 
                        of unique and authentic vintage<br /> designer jewellery</p>
                    </div>
                </div>
                {/* sec 3 image */}
                <div className="lg:w-1/4 w-full lg:mt-0 mt-4 mx-auto  hover:scale-105 transition-all">
                 <Image src={ph1} alt="prodImage" width={300} height={350} />
                </div>
                {/* sec 4 text and button */}
                <div className="lg:w-1/4 w-full lg:mt-0 mt-4 p-6">
                    <p className="text-base text-gray-600">This piece is ethically crafted in our small family-owned workshop in Peru with
                        unmatched attention to detail and care. The Natural color is the actual natural 
                        color of the fiber, undyed and 100% traceable.
                    </p>
                    <Link href={"/products"}>
                      <Button  className="mt-4 px-4 py-6 leading-4 " type="submit">See All <br/>Products</Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}