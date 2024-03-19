import ProdHighlight from "@/components/layout/prodhighlight";
import SubPage from "@/components/layout/subscription";
import Hero from "@/views/hero";
import Productslist from "@/views/productslist";
import Promotions from "@/views/promotions";



export default function Home() {
  return (
    <div>
      <Hero/>
      <Promotions/>
      <Productslist/>
      <ProdHighlight/>
      <SubPage/>
    </div>
  );
}
