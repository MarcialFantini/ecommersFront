"use client";
import React, { useEffect } from "react";
import CardNewsColumn from "../CardNewsColumn";

import style from "./style.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getPageBlog } from "@/store/slice/blogs/thunk";

export function NewsHome() {
  const list = useAppSelector((state) => state.blogs.blogs).slice(0, 3);

  return (
    <div className={style.containerNews}>
      <h2 className={style.title}>Recent News</h2>
      <p className={style.subTitle}>There are many variations passages</p>
      <div className={style.containerCardsNews}>
        {list.map((blog) => {
          return <CardNewsColumn blog={blog} key={blog.id}></CardNewsColumn>;
        })}
      </div>
    </div>
  );
}
