import Image from "next/image";
import React from "react";

import style from "./style.module.css";

import objeto from "../../assets/objectoPrueba/person.jpg";

function CardBlogWhitOutText() {
  return (
    <article className={style.containerArticle}>
      <picture className={style.picture}>
        <Image className={style.img} src={objeto} alt=""></Image>
      </picture>
      <div className={style.containerTitle}>
        <h2>Food Festival EveryWhere</h2>
      </div>
    </article>
  );
}

export default CardBlogWhitOutText;
