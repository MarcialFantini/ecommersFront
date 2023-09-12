"use client";
import React from "react";

import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleTheme } from "@/store/slice/Theme/theme";
import Link from "next/link";

interface props {
  handlerNavActive: () => void;
  activeNav: boolean;
}

function NavRight({ handlerNavActive, activeNav }: props) {
  const dispatch = useAppDispatch();

  const toggleThemeHandler = () => dispatch(toggleTheme());

  const isAdmin = useAppSelector((state) => state.login.isAdmin);

  return (
    <div
      className={
        style.navbarRight + " " + (activeNav ? style.buttonActive : "")
      }
    >
      <ul className={style.listLink}>
        <li>
          <button onClick={handlerNavActive} className={style.link}>
            {"<--"}
          </button>
        </li>
      </ul>
      <ul className={style.listLink}>
        <li onClick={handlerNavActive}>
          <Link className={style.link} href={"/"}>
            Home
          </Link>
        </li>
        <li onClick={handlerNavActive}>
          <Link className={style.link} href={"/shop"}>
            Shop
          </Link>
        </li>
        <li onClick={handlerNavActive}>
          {" "}
          <Link className={style.link} href={"/about"}>
            About Us
          </Link>
        </li>
        <li onClick={handlerNavActive}>
          <Link className={style.link} href={"/blogs"}>
            Blogs
          </Link>
        </li>
      </ul>
      <ul className={style.listLink}>
        <li onClick={handlerNavActive}>
          <Link className={style.link} href={"/login"}>
            Login
          </Link>
        </li>
        <li onClick={handlerNavActive}>
          <button className={style.link} onClick={toggleThemeHandler}>
            Theme
          </button>
        </li>
      </ul>

      {isAdmin ? (
        <ul className={style.listLink}>
          <li onClick={handlerNavActive}>
            <Link className={style.link} href={"/admin/products"}>
              Products Admin
            </Link>
          </li>
          <li onClick={handlerNavActive}>
            <Link className={style.link} href={"/admin/orders"}>
              Orders Admin
            </Link>
          </li>
          <li onClick={handlerNavActive}>
            <Link className={style.link} href={"/admin/blogs"}>
              Blogs Admin
            </Link>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default NavRight;
