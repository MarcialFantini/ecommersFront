import React from "react";
import { ProductCard } from "../ProductCard";
import style from "./style.module.css";

const listCardProduct = [{}, {}, {}, {}, {}, {}, {}, {}];

export function BestSellersProducts() {
  return (
    <div>
      <h2 className={style.title}>Best Seller Products</h2>
      <div className={style.containerCard}>
        {listCardProduct.map(() => {
          return <ProductCard></ProductCard>;
        })}
      </div>
    </div>
  );
}
