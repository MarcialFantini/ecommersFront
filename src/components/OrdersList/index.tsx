import React from "react";
import style from "./style.module.css";
import { useAppSelector } from "@/store/hooks";

function OrdersList() {
  const orders = useAppSelector((state) => state.orders.listOrders);

  return (
    <>
      {orders?.map((item) => {
        return (
          <tr key={item.id} className={style.row}>
            <td>{item.id}</td>
            <td>{item.id_usuario}</td>
            <td>{item.id_product}</td>
            <td>{item.amount}</td>
            <td>20$</td>
            <td>
              <button>Del</button>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default OrdersList;
