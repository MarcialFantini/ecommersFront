import React from "react";
import style from "./style.module.css";
import { Product } from "../TableBlogs";

function BlogsList({ list }: { list: Product[] }) {
  return (
    <>
      {list?.map((item) => {
        return (
          <tr key={item.id} className={style.row}>
            <td>{item.id}</td>
            <td>{item.category}</td>
            <td>{item.title}</td>
            <td>{item.sub_title}</td>
          </tr>
        );
      })}
    </>
  );
}

export default BlogsList;
