import React from "react";
import style from "./style.module.css";
import Image from "next/image";

import prueba from "../../assets/objectoPrueba/person.jpg";

function HeaderSectionShop() {
  return (
    <header className={style.headerContainer}>
      <div className={style.containerLeft}>
        <picture className={style.picture}>
          <Image
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
            <picture className={style.picture}>
              <Image className={style.img} src={prueba} alt="Trending Item 1" />
            </picture>
            <h2>#trending</h2>
          </div>
          <div className={style.containerImgSub}>
            <picture className={style.picture}>
              <Image className={style.img} src={prueba} alt="Trending Item 2" />
            </picture>
            <h2>#trending</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderSectionShop;
