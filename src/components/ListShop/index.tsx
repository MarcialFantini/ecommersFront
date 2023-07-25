import React from "react";
import { ProductCard } from "../ProductCard";

import style from "./style.module.css";

const listTest = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

export default function ListShop() {
  return (
    <div className={style.containerListShop}>
      {listTest.map((item) => {
        return <ProductCard></ProductCard>;
      })}
    </div>
  );
}
