"use client";
import Image from "next/image";
import React, { useState } from "react";
import Oficie from "../../assets/about/ofice.png";

import style from "./style.module.css";

function HeaderAbout() {
  const [state, setState] = useState(false);

  return (
    <picture className={style.picture}>
      <Image
        onLoad={() => setState(true)}
        className={style.img + " " + (state ? style.showImage : "")}
        src={Oficie}
        alt="oficie"
      ></Image>
      <div className={style.filter}></div>
    </picture>
  );
}

export default HeaderAbout;
