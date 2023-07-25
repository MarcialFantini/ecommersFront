import { Header } from "@/components/Header";
import { SectionsCars } from "@/components/SectionsCars";
import BannerProduct from "@/components/BannerProduct";
import { BestSellersProducts } from "@/components/BestSellersProducts";
import { NewsHome } from "@/components/NewsHome";

export default function Home() {
  return (
    <main>
      <Header></Header>
      <SectionsCars></SectionsCars>
      <BannerProduct></BannerProduct>
      <BestSellersProducts></BestSellersProducts>
      <BannerProduct></BannerProduct>
      <NewsHome></NewsHome>
    </main>
  );
}
