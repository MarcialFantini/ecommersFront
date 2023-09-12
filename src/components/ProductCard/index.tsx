"use client";
import React, { useEffect, useState } from "react";

import style from "./style.module.css";

import Image from "next/image";
import Link from "next/link";
import { productsList } from "@/store/slice/products/products";
import { useAppDispatch } from "@/store/hooks";
import { addProductToCar } from "@/store/slice/car/car";

interface props {
  products: productsList;
  index: number;
}

export function ProductCard({ products, index }: props) {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 300 * index);
  }, []);

  const handlerBuyProduct = () => dispatch(addProductToCar(products));

  return (
    <div
      className={
        style.containerCardProduct + " " + (active ? style.active : "")
      }
    >
      <picture className={style.picture}>
        <Image
          className={style.img}
          width={300}
          height={100}
          src={
            "http://localhost:5000/api/v1/images/products/one/" + products.id
          }
          alt="producto objeto description"
        />
      </picture>

      <p className={style.titleProduct}>{products.name}</p>
      <p className={style.price}>$ {products.price}</p>
      <button
        onClick={handlerBuyProduct}
        className={style.button + " " + style.buttonBuy}
      >
        Buy
      </button>
      <Link href={"/shop/product/" + products.id}>
        <button className={style.button + " " + style.buttonWatch}>
          Watch mor
        </button>
      </Link>
    </div>
  );
}
