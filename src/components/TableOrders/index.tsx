import React from "react";
import style from "./style.module.css";
import OrdersList from "../OrdersList";
function TableOrders() {
  return (
    <div>
      <table className={style.table}>
        <tbody className={style.tbody}>
          <tr className={style.trHead}>
            <th>ID</th>
            <th>USER</th>
            <th>PRODUCT</th>

            <th>AMOUNT</th>
            <th>TOTAL</th>
          </tr>
          <OrdersList></OrdersList>
        </tbody>
      </table>
    </div>
  );
}

export default TableOrders;
