import ListShop from "@/components/ListShop";
import React from "react";

import style from "./style.module.css";

export default function Shop() {
  return (
    <div>
      <div className={style.containerSearch}>
        Search a product
        <input type="text" />
      </div>
      <ListShop></ListShop>
    </div>
  );
}
