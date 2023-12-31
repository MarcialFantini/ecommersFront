import ListShop from "@/components/ListShop";
import React from "react";

import style from "./style.module.css";
import { DashBoardCategories } from "@/components/DashBoardCategories";
import HeaderSectionShop from "@/components/HeaderSectionShop";

export default function Shop() {
  return (
    <div>
      <div className={style.containerSearch}>
        <input placeholder={"   Search a product !"} type="text" />
        <button>Search</button>
      </div>
      <DashBoardCategories></DashBoardCategories>
      <HeaderSectionShop></HeaderSectionShop>

      <ListShop></ListShop>
    </div>
  );
}
