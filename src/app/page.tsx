import { Header } from "@/components/Header";
import { SectionsCars } from "@/components/SectionsCars";
import BannerProduct from "@/components/BannerProduct";
import { BestSellersProducts } from "@/components/BestSellersProducts";
import { NewsHome } from "@/components/NewsHome";

export default function Home() {
  return (
    <main style={{ maxWidth: 1200, margin: "auto", width: "90%" }}>
      <Header></Header>
      <SectionsCars></SectionsCars>
      <BannerProduct></BannerProduct>
      <BestSellersProducts></BestSellersProducts>
      <BannerProduct></BannerProduct>
      <NewsHome></NewsHome>
    </main>
  );
}
