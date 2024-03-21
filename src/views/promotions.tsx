import { Button } from "@/components/ui/button"
import Image from 'next/image'
import event1 from "../../public/event1.webp";
import event2 from "../../public/event2.webp";
import event3 from "../../public/event3.webp";

const Promotions = () => {
    return (
        <div className="lg:mx-16 lg:px-16 lg:mt-20">
            <div>
                <h3 className="text-blue-700 flex justify-center  font-semibold">PROMOTIONS</h3>
                <h2 className="text-gray-700 flex justify-center  font-bold text-4xl mt-6">Our Promotions Events</h2>
            </div>
            <div>
                <div className=" lg:grid lg:grid-cols-4  gap-x-4 lg:gap-y-2 mt-5 sm:gap-y-2">
                    {/* first box with girl */}
                    <div className="bg-slate-300 col-span-2 h-48">
                        <div className="px-12 py-6">
                            <h1 className="text-3xl font-extrabold">Get Up To</h1>
                            <h1 className="text-3xl font-black	">60%</h1>
                            <p className="text-base leading-5 mt-2">For The Summer <br />Season</p>
                            <Image src={event1} alt="event1" height={208} className="-mt-40 ml-32" />
                        </div>
                    </div>
                    {/* 2nd box with boy and peach bg */}
                    <div className="bg-yellow-200 row-span-2 sm:row-span-auto lg:mt-0 mt-2">
                        <div className="lg:py-3 px-16 ">
                            <p className="text-base px-2 lg:mt-0 mt-2">Flex SweatShirt</p>
                            <p className="text-lg px-2">
                                <span className="line-through">$100  </span>
                                <span className="text-lg font-bold">  $75.00</span>
                            </p>
                            <Image src={event3} alt="event2" className="max-w-full h-auto" />
                        </div>
                    </div>
                    {/* 3rd box with boy and blue bg */}
                    <div className="bg-slate-300 row-span-2 h-[58] lg:mt-0 mt-2">
                        <div className="lg:py-3 px-16 ">
                            <p className="text-base px-2 lg:mt-0 mt-2">Flex Push Button Bomber</p>
                            <p className="text-lg px-2">
                                <span className="line-through">$225.00  </span>
                                <span className="text-lg font-bold">  $190.00</span>
                            </p>
                            <Image src={event2} alt="event3" />
                        </div>
                    </div>
                    {/* 4th b;ack box only text */}
                    <div className="bg-gray-950 col-span-2 h-48 text-center">
                        <div className="lg:px-4 lg:py-3 lg:mt-6  mt-2 py-8">
                            <h1 className="text-3xl font-extrabold text-white">GET 30% OFF</h1>
                            <p className="text-base text-white">Use Promo Code</p>
                            <Button className="bg-gray-600 h-8 px-5 mt-1">SOLESWAYWEEKENDSALE</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promotions