import React from "react";

import objeto from "../../assets/objectoPrueba/objeto.png";

import style from "./style.module.css";
import Image from "next/image";
import { BlogsPageText } from "@/store/slice/blogs/thunk";

interface props {
  blog: BlogsPageText;
}

export default function CardNewsColumn({ blog }: props) {
  return (
    <div className={style.cardContainer}>
      <picture className={style.picture}>
        <Image
          className={style.img}
          width={400}
          height={200}
          src={"http://localhost:5000/api/v1/images/blogs/one/" + blog.id}
          alt={blog.title}
        />
      </picture>
      <p className={style.subTitle}>{blog.sub_title}</p>
      <h2 className={style.title}>{blog.title}</h2>
      <p className={style.text}>
        {blog.listText[0] ? blog.listText[0].text_blog : ""}
      </p>
    </div>
  );
}
