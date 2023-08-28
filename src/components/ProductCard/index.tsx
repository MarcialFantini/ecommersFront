import React from "react";

import style from "./style.module.css";

import objeto from "./../../assets/objectoPrueba/objeto.png";
import Image from "next/image";
import Link from "next/link";

export function ProductCard() {
  return (
    <div className={style.containerCardProduct}>
      <picture className={style.picture}>
        <Image
          className={style.img}
          src={objeto}
          alt="producto objeto description"
        />
      </picture>

      <p className={style.titleProduct}>Name Product</p>
      <p className={style.price}>$ Price</p>
      <button className={style.button + " " + style.buttonBuy}>Buy</button>
      <Link href={"/shop/product"}>
        <button className={style.button + " " + style.buttonWatch}>
          Watch mor
        </button>
      </Link>
    </div>
  );
}
