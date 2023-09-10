"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import Image from "next/image";

import prueba from "../../assets/shop/ropa.jpg";
import toy from "../../assets/shop/toy.jpg";
import men from "../../assets/shop/man.jpg";

function HeaderSectionShop() {
  const [active, setActive] = useState(false);

  return (
    <header className={style.headerContainer}>
      <div className={style.containerLeft}>
        <picture className={style.picture + " " + (active ? style.active : "")}>
          <Image
            onLoad={() => setActive(true)}
            className={style.img + " " + style.imgPrimary}
            src={prueba}
            alt="Logo de Real Shop Network"
          />
        </picture>
      </div>

      <div className={style.containerRight}>
        <div className={style.topContainerSub}>
          <h1>Welcome to Real Shop Network</h1>
          <p>Discover the best shopping experience.</p>
        </div>

        <div className={style.containerRightBottom}>
          <div className={style.containerImgSub}>
            <picture
              className={style.picture + " " + (active ? style.active : "")}
            >
              <Image className={style.img} src={toy} alt="Trending Item 1" />
            </picture>
            <h2>#trending</h2>
          </div>
          <div className={style.containerImgSub}>
            <picture
              className={style.picture + " " + (active ? style.active : "")}
            >
              <Image className={style.img} src={men} alt="Trending Item 2" />
            </picture>
            <h2>#trending</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderSectionShop;
