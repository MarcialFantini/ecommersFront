import React from "react";

import style from "./style.module.css";

export function DashBoardCategories() {
  return (
    <ul className={style.dashBoard}>
      <li>Women</li>
      <li>Men</li>
      <li>Kids</li>
      <li>Gifts</li>
      <li>Kitchen</li>
    </ul>
  );
}
