import React from "react";

import style from "./style.module.css";
import Link from "next/link";

export function Navbar() {
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
            <Link className={style.link} href={"/blog"}>
              Blog
            </Link>
          </li>
          <li>
            {" "}
            <Link className={style.link} href={"/contact"}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <ul className={style.buttons}>
        <button>Login</button>
        <button>Search</button>
      </ul>
    </nav>
  );
}
