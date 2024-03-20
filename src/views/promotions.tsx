import { Button } from "@/components/ui/button"
import Image from 'next/image'
import event1 from  "../../public/event1.webp";
import event2 from "../../public/event2.webp";
import event3 from "../../public/event3.webp";

const Promotions = () => {
    return (
        <div className="mx-16 px-16 mt-20">
            <div>
                <h3 className="text-blue-700 flex justify-center  font-semibold">PROMOTIONS</h3>
                <h2 className="text-gray-700 flex justify-center  font-bold text-4xl mt-6">Our Promotions Events</h2>
            </div>
            <div>
                <div className=" grid grid-cols-4  gap-x-4 gap-y-2 mt-5">
                    {/* first box with girl */}
                    <div className="bg-slate-300 col-span-2 h-32">
                        <div className="px-8 py-3">
                            <h1 className="text-2xl font-extrabold">Get Up To</h1>
                            <h1 className="text-2xl font-black	">60%</h1>
                            <p className="text-base leading-4">For The Summer <br />Season</p>
                            <Image src={event1} alt="event1" />
                        </div>
                    </div>
                    {/* 2nd box with boy and peach bg */}
                    <div className="bg-yellow-100 row-span-2 h-[58]">
                        <div className="px-8 py-3">
                            <p className="text-base">Flex SweatShirt</p>
                            <p className="text-lg">
                                <span className="line-through">$100  </span>
                                <span className="text-lg font-bold">  $75.00</span>
                            </p>
                            <Image src={event2} alt="event2" />
                        </div>
                    </div>
                    {/* 3rd box with boy and blue bg */}
                    <div className="bg-slate-300 row-span-2 h-[58]">
                    <div className=" py-3">
                            <p className="text-base px-2">Flex Push Button Bomber</p>
                            <p className="text-lg px-2">
                                <span className="line-through">$225.00  </span>
                                <span className="text-lg font-bold">  $190.00</span>
                            </p>
                            <Image src={event3} alt="event3" />
                        </div>
                    </div>
                    {/* 4th b;ack box only text */}
                    <div className="bg-gray-950 col-span-2 h-32 text-center">
                        <div className="px-4 py-3">
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