import Image from "next/image";
import React from "react";

import style from "./style.module.css";

import objeto from "../../../assets/objectoPrueba/person.jpg";

export default function ProductRouter() {
  return (
    <div className={style.containerProduct}>
      <picture className={style.picture}>
        <Image className={style.img} src={objeto} alt="a"></Image>
      </picture>

      <div className={style.containerProductRight}>
        <h1 className={style.title}>Titulo product</h1>
        <p className={style.subTitle}>NMD CITY SOCK 2</p>
        <p className={style.description}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          facere ratione et officia. Sint quasi perferendis atque omnis aliquid
          deserunt voluptatibus quia quaerat, ipsam quam fugiat, blanditiis,
          aperiam illum neque?
        </p>
        <p className={style.price}>$23</p>
        <button className={style.button}>BUY NOW</button>
      </div>
    </div>
  );
}
