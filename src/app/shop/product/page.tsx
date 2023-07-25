import Image from "next/image";
import React from "react";

import style from "./style.module.css";

import girl from "../../../assets/objectoPrueba/girlVertical.jpg";
import objeto from "../../../assets/objectoPrueba/objeto.png";

export default function ProductRouter() {
  return (
    <div className={style.containerProduct}>
      <picture className={style.pictureLeft}>
        <Image className={style.imgLeft} src={girl} alt="a"></Image>
      </picture>

      <div className={style.containerProductRight}>
        <h1 className={style.title}>Titulo product</h1>
        <p className={style.subTitle}>NMD CITY SOCK 2</p>
        <picture className={style.pictureRight}>
          <Image className={style.imgRight} src={objeto} alt="" />
        </picture>

        <button className={style.button}>Comprar</button>
      </div>
    </div>
  );
}
