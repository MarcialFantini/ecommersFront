"use client";

import Image, { StaticImageData } from "next/image";
import style from "./style.module.css";
import { useRef } from "react";
import { useObserve } from "@/hooks/useObserve";

export function CardSectionLarge({
  src,
  title,
  category,
}: {
  src: string | StaticImageData;
  title: string;
  category: string;
}) {
  const ref = useRef(null);

  const isVisible = useObserve(ref);
  return (
    <div ref={ref} className={style.containerSectionLarge}>
      <p className={style.text}>Trend</p>
      <h4 className={style.subtitle}>{category}</h4>
      <h2 className={style.titleProduct}>{title}</h2>
      <button className={style.button}>Browse</button>
      <Image
        className={style.img + " " + (isVisible ? style.activeImage : "")}
        src={src}
        alt=""
      ></Image>
    </div>
  );
}
