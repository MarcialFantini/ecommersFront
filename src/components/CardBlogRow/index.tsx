"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import style from "./style.module.css";
import { BlogsPageText } from "@/store/slice/blogs/thunk";

interface props {
  isRow?: boolean;
  blog: BlogsPageText | undefined;
}

export const CardBlogRow = ({ isRow, blog }: props) => {
  return (
    <div
      key={blog?.id}
      className={style.containerCardBlogRow + " " + (isRow ? style.isRow : "")}
    >
      <picture className={style.picture}>
        <Image
          width={800}
          height={400}
          src={
            blog
              ? "http://localhost:5000/api/v1/images/blogs/one/" + blog.id
              : ""
          }
          className={style.img}
          alt=""
        ></Image>
      </picture>
      <div className={style.containerText}>
        <h2 className={style.title}>{blog ? blog.title : ""}</h2>
        <p className={style.description}>
          {blog && blog.listText[0] ? blog.listText[0].text_blog : ""}
        </p>
      </div>
    </div>
  );
};
