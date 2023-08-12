import ListShop from "@/components/ListShop";
import React from "react";

import style from "./style.module.css";
import { DashBoardCategories } from "@/components/DashBoardCategories";
import HeaderSectionShop from "@/components/HeaderSectionShop";

export default function Shop() {
  return (
    <div>
      <DashBoardCategories></DashBoardCategories>
      <HeaderSectionShop></HeaderSectionShop>
      <div className={style.containerSearch}>
        Search a product
        <input type="text" />
      </div>
      <ListShop></ListShop>
    </div>
  );
}
