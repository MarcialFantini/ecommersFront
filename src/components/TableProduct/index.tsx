import React from "react";
import ProductsList from "../ProductsList";

import style from "./style.module.css";

function TableProduct() {
  return (
    <table className={style.table}>
      <tbody className={style.tbody}>
        <tr className={style.trHead}>
          <th>ID</th>
          <th>NAME</th>
          <th>PRICE</th>

          <th>AMOUNT</th>
        </tr>

        <ProductsList></ProductsList>
      </tbody>
    </table>
  );
}

export default TableProduct;
