"use client";
import React from "react";
import style from "./style.module.css";
import { useAppSelector } from "@/store/hooks";

interface props {
  children: React.ReactNode;
}

function BackImage({ children }: props) {
  const isDark = useAppSelector((state) => state.theme.isThemeDark);

  return (
    <div
      className={style.container + " " + (isDark ? style.black : style.light)}
    >
      <div className={style.margin}>{children}</div>
    </div>
  );
}

export default BackImage;
