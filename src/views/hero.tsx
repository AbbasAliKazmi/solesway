import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"


export default function  Hero(){
  return (
    <section>

       {/*left div*/}
    <div>
      <Badge className="py-3 px-6 rounded-lg bg-blue-200 font-bold  text-blue-700 hover:bg-blue-300">Badge</Badge>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      An Industrial<br/> Take on<br/> Streetwear
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      Anyone can beat you but no one can<br/> beat your outfit as long as you wear <br/>Dine outfits.
      </p>
      <div className="relative flex items-center">
      <Search className="absolute ml-2  items-center pointer-events-none text-gray-100" size={26}/>
      <Button className="mt-6">Shop Now</Button>
      </div>
      
    </div>
       {/*right div*/}
    <div>
        
    </div>

    </section>
  )
}

 