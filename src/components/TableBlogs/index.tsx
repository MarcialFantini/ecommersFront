"use client";
import React, { useState, useEffect } from "react";

import style from "./style.module.css";
import BlogsList from "../BlogsList";
import Link from "next/link";

export interface Product {
  id: number;
  category: string;
  title: string;
  sub_title: string;
}

function TableBlogs() {
  const [list, setList] = useState<Product[]>([]);
  const [id, setId] = useState(0);

  const handlerFetch = (number: number) => {
    fetch("http://localhost:5000/api/v1/blogs/admin/page/" + number)
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((x) => console.log(x));
  };

  const handlerLess = () => {
    if (id - 1 >= 0) {
      handlerFetch(id - 1);
      setId(id - 1);
    }
  };
  const handlerNext = () => {
    handlerFetch(id + 1);
    setId(id + 1);
  };

  useEffect(() => {
    handlerFetch(0);
  }, []);

  return (
    <>
      <div className={style.containerTitle}>
        <h1>Blogs</h1>

        <Link className={style.Link} href={"/admin/blogs/create"}>
          Next
        </Link>
      </div>
      <div className={style.containerSearch}>
        <input className={style.search} type="text" placeholder="search blog" />
        <button>Search</button>
      </div>
      <div className={style.containerSearch}>
        <button onClick={handlerLess}>Less</button>
        <button onClick={handlerNext}>Next</button>
      </div>
      <table className={style.table}>
        <tbody className={style.tbody}>
          <tr className={style.trHead}>
            <th>ID</th>
            <th>CATEGORY</th>

            <th>TITLE</th>

            <th>SUBTITLE</th>
          </tr>
          <BlogsList list={list}></BlogsList>
        </tbody>
      </table>
    </>
  );
}

export default TableBlogs;
