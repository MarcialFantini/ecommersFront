import React from "react";
import CardNewsColumn from "../CardNewsColumn";

import style from "./style.module.css";

export function NewsHome() {
  return (
    <div className={style.containerNews}>
      <h2 className={style.title}>Recent News</h2>
      <p className={style.subTitle}>There are many variations passages</p>
      <div className={style.containerCardsNews}>
        <CardNewsColumn></CardNewsColumn>
        <CardNewsColumn></CardNewsColumn>

        <CardNewsColumn></CardNewsColumn>
      </div>
    </div>
  );
}
