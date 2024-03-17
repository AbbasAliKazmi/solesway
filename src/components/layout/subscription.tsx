import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SubPage(){
    return (
<div className="py-40 flex flex-col items-center text-center">
  <h1 className="font-extrabold text-4xl font-mono">Subscribe Our Newsletter</h1>
  <p className="mt-5 text-base text-gray-600 font-normal">Get the latest information and promo offers directly</p>
  <div className="flex w-full max-w-sm items-center space-x-2 mt-5">
      <Input type="email" placeholder="Input Email Address" />
      <Button type="submit">Get Started</Button>
    </div>
</div>

    )
}