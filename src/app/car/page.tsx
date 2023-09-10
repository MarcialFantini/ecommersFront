"use client";
import OrdersItem from "@/components/OrdersItem";
import style from "./style.module.css";
import { useAppSelector } from "@/store/hooks";
import React from "react";

export default function CarRoutes() {
  const list = useAppSelector((state) => state.car.listOfProducts);

  return (
    <div className={style.containerCard}>
      {list.length > 0 ? <h2>Orders:</h2> : null}
      {list.map((item) => {
        return <OrdersItem product={item} key={item.product.id}></OrdersItem>;
      })}
    </div>
  );
}
