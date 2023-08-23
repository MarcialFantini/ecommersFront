"use client";
import React from "react";

import style from "./style.module.css";
import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { toggleTheme } from "@/store/slice/Theme/theme";

export function Navbar() {
  const dispatch = useAppDispatch();

  const toggleThemeHandler = () => dispatch(toggleTheme());

  return (
    <nav className={style.navbar}>
      <div className={style.leftContainer}>
        <h2 className={style.title}>PHLOX</h2>
        <ul className={style.listLink}>
          <li>
            <Link className={style.link} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className={style.link} href={"/shop"}>
              Shop
            </Link>
          </li>
          <li>
            {" "}
            <Link className={style.link} href={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <Link className={style.link} href={"/blogs"}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>

      <ul className={style.buttons}>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <button onClick={toggleThemeHandler}>Theme</button>
      </ul>
    </nav>
  );
}
