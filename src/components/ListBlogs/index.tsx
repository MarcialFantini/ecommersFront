import React from "react";
import { CardBlogRow } from "../CardBlogRow";
import style from "./style.module.css";
import { BlogsPageText } from "@/store/slice/blogs/thunk";
const list = [{}, {}, {}];

export const ListBlogs = ({ blog }: { blog: BlogsPageText[] }) => {
  return (
    <div className={style.container}>
      {blog.map((item) => (
        <CardBlogRow blog={item} isRow></CardBlogRow>
      ))}
    </div>
  );
};
