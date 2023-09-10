"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { thunkGetPageProduct } from "@/store/slice/products/thunks";

export default function ListShop() {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  const list = useAppSelector((state) => state.products.listProducts);

  const lengthListProduct = useAppSelector(
    (state) => state.products.listProducts.length
  );

  const handlerNextPage = () => {
    if (lengthListProduct >= 12) {
      dispatch(thunkGetPageProduct(count + 1));
      setCount(count + 1);
    }
  };

  const handlerLessPage = () => {
    if (count - 1 >= 0) {
      dispatch(thunkGetPageProduct(count - 1));
      setCount(count - 1);
    }
  };

  useEffect(() => {
    dispatch(thunkGetPageProduct(0));
  }, []);

  return (
    <>
      <div>
        <button onClick={handlerLessPage}>Before</button>
        <button onClick={handlerNextPage}>Next</button>
      </div>
      <div className={style.containerListShop}>
        {list.map((item, index) => {
          return (
            <ProductCard
              key={item.id}
              index={index}
              products={item}
            ></ProductCard>
          );
        })}
      </div>
    </>
  );
}
