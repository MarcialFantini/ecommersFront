import React from "react";

import objeto from "../../assets/objectoPrueba/objeto.png";

import style from "./style.module.css";
import Image from "next/image";

export default function CardNewsColumn() {
  return (
    <div className={style.cardContainer}>
      <picture className={style.picture}>
        <Image className={style.img} src={objeto} alt="" />
      </picture>
      <p className={style.subTitle}>October 5, 2019 by Paul</p>
      <h2 className={style.title}>How to choose perfect gadgets</h2>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        nostrum libero esse voluptas eius?
      </p>
    </div>
  );
}
