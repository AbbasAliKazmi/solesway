
const Promotions = () => {
    return (
        <div className="mx-16 px-16">
            <div>
                <h3 className="text-blue-700 flex justify-center  font-semibold">PROMOTIONS</h3>
                <h2 className="text-gray-700 flex justify-center  font-bold text-4xl">Our Promotions Events</h2>
            </div>
            <div>
                <div className=" grid grid-cols-4  gap-x-4 gap-y-2">
                   <div className="bg-slate-300 col-span-2 h-28">1</div>
                   <div className="bg-yellow-100	 row-span-2 h-[58]">2</div>
                   <div className="bg-slate-300 row-span-2 h-[58]">3</div>
                   <div className="bg-gray-950		 col-span-2 h-28">4</div>
                </div>
            </div>
        </div>
    )
}

export default Promotions