import React from "react";

import style from "./style.module.css";
import BlogsList from "../BlogsList";

function TableBlogs() {
  return (
    <>
      <div className={style.containerTitle}>
        <h1>Blogs</h1>
        <button>New Blog</button>
      </div>
      <div className={style.containerSearch}>
        <input className={style.search} type="text" placeholder="search blog" />
        <button>Search</button>
      </div>
      <table className={style.table}>
        <tbody className={style.tbody}>
          <tr className={style.trHead}>
            <th>ID</th>
            <th>TITLE</th>
            <th>DATE</th>

            <th>ACTIVE</th>
          </tr>
          <BlogsList></BlogsList>
        </tbody>
      </table>
    </>
  );
}

export default TableBlogs;
