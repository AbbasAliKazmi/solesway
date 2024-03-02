import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import heroimg from "../../public/heroimg.jpg"
import Image from "next/image"


export default function  Hero(){
  return (
    <section className="flex py-6 gap-y-10 flex-col lg:flex-row">

       {/*left div*/}
    <div className="flex-1">
      <Badge className="py-3 px-6 rounded-lg bg-blue-200 font-bold  text-blue-700 hover:bg-blue-300">Sale 70%</Badge>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-5">
      An Industrial Take on Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
      </p>
      <div className="relative flex items-center">
      <Search className="absolute ml-2  items-center pointer-events-none text-gray-100" size={26}/>
      <Button className="bg-black h-12 px-8 mt-4">Shop Now</Button>
      </div>
      
    </div >
       {/*right div*/}
    <div className="flex-1">
        <Image src={heroimg} alt="hero image" />
    </div>

    </section>
  )
}

 