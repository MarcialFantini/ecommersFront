import React from "react";

import style from "./style.module.css";
import Link from "next/link";

const NavADminRoutes = () => {
  return (
    <ul className={style.containerNav}>
      <li>
        <Link className={style.Link} href={"/admin/products"}>
          Products
        </Link>
      </li>
      <li>
        <Link className={style.Link} href={"/admin/orders"}>
          Orders
        </Link>
      </li>
      <li>
        <Link className={style.Link} href={"/admin/blogs"}>
          Blogs
        </Link>
      </li>
    </ul>
  );
};

export default NavADminRoutes;
