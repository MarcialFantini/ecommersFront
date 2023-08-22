import React from "react";
import TableOrders from "../TableOrders";
import style from "./style.module.css";

function OrdersPageAdmin() {
  return (
    <div>
      <div className={style.containerTitle}>
        <h1>Orders</h1>
      </div>
      <div className={style.containerSearch}>
        <input
          className={style.search}
          type="text"
          placeholder="search order"
        />
        <button>Search</button>
      </div>
      <TableOrders></TableOrders>
    </div>
  );
}

export default OrdersPageAdmin;
