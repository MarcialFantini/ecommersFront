import Image from "next/image";
import React from "react";
import Oficie from "../../assets/about/ofice.png";

import style from "./style.module.css";

function HeaderAbout() {
  return (
    <picture className={style.picture}>
      <Image className={style.img} src={Oficie} alt="oficie"></Image>
      <div className={style.filter}></div>
    </picture>
  );
}

export default HeaderAbout;
