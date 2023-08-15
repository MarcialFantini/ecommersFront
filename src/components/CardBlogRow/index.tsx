import Image from "next/image";
import React from "react";
import style from "./style.module.css";
import objeto from "../../assets/objectoPrueba/person.jpg";

interface props {
  isRow?: boolean;
}

export const CardBlogRow = ({ isRow }: props) => {
  return (
    <div
      className={style.containerCardBlogRow + " " + (isRow ? style.isRow : "")}
    >
      <picture className={style.picture}>
        <Image src={objeto} className={style.img} alt=""></Image>
      </picture>
      <div className={style.containerText}>
        <h2 className={style.title}>
          Fodd festival everywere in this universe
        </h2>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          distinctio officia quae. Facilis omnis cumque veritatis optio? Velit
          ipsa cum placeat quasi molestias, architecto quidem, voluptatum, minus
          facilis numquam sint?
        </p>
      </div>
    </div>
  );
};
