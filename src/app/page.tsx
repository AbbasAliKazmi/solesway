import { Button } from "../components/ui/button"
import { Mail } from "lucide-react"



export default function Home() {
  return (
    <div className='m-6'>
     <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Taxing Laughter: The Joke Tax Chronicles
     </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error of
        his ways and repealed the joke tax.
      </p>
      <Button>
         <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </div>
  );
}
