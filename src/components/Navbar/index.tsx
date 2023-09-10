"use client";
import React, { useState } from "react";

import style from "./style.module.css";

import NavRight from "./NavRight";

export function Navbar() {
  const [activeNav, setActive] = useState(false);

  const handlerNavActive = () => setActive(!activeNav);

  return (
    <nav className={style.navbar}>
      <div className={style.leftContainer}>
        <h2 className={style.title}>PHLOX</h2>
      </div>
      <button className={style.buttonNav} onClick={handlerNavActive}>
        |||
      </button>
      <NavRight
        activeNav={activeNav}
        handlerNavActive={handlerNavActive}
      ></NavRight>
    </nav>
  );
}
