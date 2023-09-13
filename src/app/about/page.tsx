import React from "react";

import style from "./style.module.css";
import AboutComponent from "@/components/AboutComponent";
import HeaderAbout from "@/components/HeaderAbout";

export default function AboutRoute() {
  return (
    <div className={style.containerAbout}>
      <HeaderAbout></HeaderAbout>
      <AboutComponent></AboutComponent>
    </div>
  );
}
