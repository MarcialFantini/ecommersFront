"use client";
import OrdersItem from "@/components/OrdersItem";
import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import React, { useEffect } from "react";
import Link from "next/link";
import { ProductCar, setDefaultCar } from "@/store/slice/car/car";
import { OrderProductCreator, createOrder } from "@/store/slice/oders/thunk";
import { toggleComplete } from "@/store/slice/oders/orders";
import { useRouter } from "next/navigation";

const totalPrice = (list: ProductCar[]) => {
  let total;

  if (list.length > 0) {
    total = list
      .map((item) => {
        return item.amount * item.product.price;
      })
      .reduce((valueOne, valueTwo) => valueOne + valueTwo);
  }

  return total;
};

export default function CarRoutes() {
  const router = useRouter();
  const list = useAppSelector((state) => state.car.listOfProducts);
  const isCompleted = useAppSelector((state) => state.orders.completed);
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.login.token) || "";

  const handlerSendOrder = () => {
    const listOrders: OrderProductCreator[] = [...list].map((item) => {
      return {
        amount: item.amount,
        id_product: item.product.id,
      };
    });

    dispatch(createOrder({ list: listOrders, token }));
  };

  useEffect(() => {
    if (isCompleted) {
      setTimeout(() => {
        dispatch(toggleComplete());
        dispatch(setDefaultCar());
        router.push("/");
      }, 2000);
    }
  }, [isCompleted]);
  return (
    <div className={style.containerCard}>
      {isCompleted ? (
        <div className={style.modal}>
          <h2>Order completed!</h2>
        </div>
      ) : (
        ""
      )}
      {list.length > 0 ? <h2>Orders:</h2> : <h2>No Products Selected</h2>}
      {list.length === 0 ? (
        <Link className={style.buttonCar} href={"/shop"}>
          Go To Buy
        </Link>
      ) : null}
      <div className={style.page}>
        <div className={style.containerOrders}>
          {list.map((item) => {
            return (
              <OrdersItem product={item} key={item.product.id}></OrdersItem>
            );
          })}
        </div>
        {list.length > 0 ? (
          <div className={style.containerTotal}>
            <h2>Total: {totalPrice(list)}</h2>
            <button onClick={handlerSendOrder} className={style.buttonBuy}>
              Pay!
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
