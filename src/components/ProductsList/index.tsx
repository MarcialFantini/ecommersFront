"use client";
import { useEffect } from "react";
import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { thunkGetPageProduct } from "@/store/slice/products/thunks";

function ProductsList() {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.products.listProducts);

  useEffect(() => {
    dispatch(thunkGetPageProduct(0));
  }, []);

  return (
    <>
      {list?.map((item) => {
        return (
          <tr key={item.id} className={style.row}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.amount}</td>
          </tr>
        );
      })}
    </>
  );
}

export default ProductsList;
