import { CardBlogRow } from "@/components/CardBlogRow";
import CardBlogWhitOutText from "@/components/CardBlogWithOutText";
import React from "react";

import style from "./style.module.css";
import { ListBlogs } from "@/components/ListBlogs";

function BlogsRouter() {
  return (
    <div className={style.containerBlogs}>
      <div className={style.row}>
        <CardBlogWhitOutText></CardBlogWhitOutText>
        <CardBlogRow></CardBlogRow>
      </div>
      <ListBlogs></ListBlogs>
    </div>
  );
}

export default BlogsRouter;
