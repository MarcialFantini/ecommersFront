"use client";
import React from "react";
import { ProductCard } from "../ProductCard";
import style from "./style.module.css";
import { useAppSelector } from "@/store/hooks";

export function BestSellersProducts() {
  const list = useAppSelector((state) => state.products.listProducts).slice(
    0,
    5
  );

  return (
    <div>
      <h2 className={style.title}>Best Seller Products</h2>
      <div className={style.containerCard}>
        {list.map((product) => (
          <ProductCard key={product.id} products={product}></ProductCard>
        ))}
      </div>
    </div>
  );
}
