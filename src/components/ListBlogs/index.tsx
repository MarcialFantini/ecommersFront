import React from "react";
import { CardBlogRow } from "../CardBlogRow";
import style from "./style.module.css";
const list = [{}, {}, {}];

export const ListBlogs = () => {
  return (
    <div className={style.container}>
      {list.map(() => (
        <CardBlogRow isRow></CardBlogRow>
      ))}
    </div>
  );
};
