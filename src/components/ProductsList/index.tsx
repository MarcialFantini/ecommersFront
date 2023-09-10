"use client";

import style from "./style.module.css";
import { useAppSelector } from "@/store/hooks";

function ProductsList() {
  const list = useAppSelector((state) => state.products.listProducts);

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
