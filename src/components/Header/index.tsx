import React from "react";

import style from "./style.module.css";

import objeto from "../../assets/objectoPrueba/objeto.png";
import Image from "next/image";

export function Header() {
  return (
    <header className={style.container}>
      <div className={style.containerLeft}>
        <p className={style.subtitle}>Beats Solo</p>
        <h3 className={style.titleH3}>Wireless</h3>

        <h2 className={style.titleH2}>HEAD SET</h2>
        <picture className={style.picture}>
          <Image className={style.img} src={objeto} alt="" />
        </picture>
        <button className={style.button}>Shop ByCategory</button>
      </div>
      <div className={style.containerRight}>
        <h4>Description</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
          illum autem maiores reprehenderit repudiandae voluptates. Eos vel
          ullam laboriosam.
        </p>
      </div>
    </header>
  );
}
