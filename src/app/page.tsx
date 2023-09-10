"use client";
import { Header } from "@/components/Header";
import { SectionsCars } from "@/components/SectionsCars";
import BannerProduct from "@/components/BannerProduct";
import { BestSellersProducts } from "@/components/BestSellersProducts";
import { NewsHome } from "@/components/NewsHome";
import { useAppDispatch } from "@/store/hooks";
import { useEffect } from "react";
import { thunkGetPageProduct } from "@/store/slice/products/thunks";
import { getPageBlog } from "@/store/slice/blogs/thunk";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunkGetPageProduct(0));
    dispatch(getPageBlog(0));
  }, []);

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
