import React from "react";

import style from "./style.module.css";

function BannerProduct() {
  return (
    <div className={style.containerBannerProduct}>
      <div className={style.containerLeft}>
        <p className={style.subText}>20% OFF</p>
        <h2 className={style.title}>FINE SMID</h2>
        <p className={style.subText}>15 Nov To 7 Dec</p>
      </div>

      <div className={style.containerRight}>
        <p className={style.subText}>Beats Solo Air</p>
        <h2 className={style.subTitle}>Summer Sale</h2>
        <p className={style.subText}>
          Company that's grown from 270 to 480 employees in the last 12 months.
        </p>
        <button className={style.button}>Shop</button>
      </div>
    </div>
  );
}

export default BannerProduct;
