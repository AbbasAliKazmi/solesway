import Hero from "@/views/hero";
import Productslist from "@/views/productslist";
import Promotions from "@/views/promotions";



export default function Home() {
  return (
    <div>
      <Hero/>
      {/* <Promotions/> */}
      <Productslist/>
    </div>
  );
}
