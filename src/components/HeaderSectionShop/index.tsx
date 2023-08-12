import React from "react";
import style from "./style.module.css";
import Image from "next/image";

function HeaderSectionShop() {
  return (
    <div className={style.containerHeader}>
      <div className={style.containerCardGreat}>
        <h2>producto</h2>
        <picture>
          <Image src={""} alt=""></Image>
        </picture>
      </div>
      <div>
        <div>
          <h2>producto</h2>
          <picture>
            <Image src={""} alt=""></Image>
          </picture>
        </div>

        <div>
          <h2>producto</h2>
          <picture>
            <Image src={""} alt=""></Image>
          </picture>
        </div>
      </div>
    </div>
  );
}

export default HeaderSectionShop;
