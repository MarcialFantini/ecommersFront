"use client";
import React, { useEffect } from "react";
import style from "./style.module.css";
import OrdersList from "../OrdersList";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getOrders } from "@/store/slice/oders/thunk";

function TableOrders() {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.login.token) || "";

  useEffect(() => {
    dispatch(getOrders({ token, page: 1 }));
  }, []);

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
            <th>ACTIONS</th>
          </tr>
          <OrdersList></OrdersList>
        </tbody>
      </table>
    </div>
  );
}

export default TableOrders;
