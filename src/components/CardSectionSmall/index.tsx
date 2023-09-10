"use client";

import Image, { StaticImageData } from "next/image";
import style from "./style.module.css";
import { useRef } from "react";
import { useObserve } from "@/hooks/useObserve";
interface props {
  type: string;
  title: string;
  color: string;
  src: string | StaticImageData;
}

export function CardSectionSmall({ type, title, color, src }: props) {
  const ref = useRef(null);

  const isVisible = useObserve(ref);

  return (
    <div ref={ref} style={{ background: color }} className={style.card}>
      <Image
        className={style.img + " " + (isVisible ? style.activeImage : "")}
        alt="adwa"
        src={src}
      ></Image>

      <p className={style.text}>{type}</p>
      <h4 className={style.subTitle}>With</h4>
      <h2 className={style.title}>{title}</h2>
      <button className={style.button}>Browse</button>
    </div>
  );
}
