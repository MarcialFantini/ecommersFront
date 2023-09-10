"use client";
import { CardBlogRow } from "@/components/CardBlogRow";
import React, { useEffect } from "react";

import style from "./style.module.css";
import { ListBlogs } from "@/components/ListBlogs";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getPageBlog } from "@/store/slice/blogs/thunk";

function BlogsRouter() {
  const dispatch = useAppDispatch();
  const blog = useAppSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(getPageBlog(0));
  }, []);
  return (
    <div className={style.containerBlogs}>
      <div className={style.row}>
        <CardBlogRow blog={blog[0]}></CardBlogRow>
      </div>
      <ListBlogs blog={blog.slice(1, 4)}></ListBlogs>
    </div>
  );
}

export default BlogsRouter;
