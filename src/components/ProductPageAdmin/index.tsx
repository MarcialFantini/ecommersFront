"use client";

import { useState } from "react";

import style from "./style.module.css";
import ProductsList from "../ProductsList";
import TableProduct from "../TableProduct";
import ProductFormCreator from "../ProductFormCreator";

function ProductPageAdmin() {
  const [isActiveCreate, setIsActiveCreate] = useState(true);

  const toggleActive = () => setIsActiveCreate(!isActiveCreate);

  return (
    <div>
      {isActiveCreate ? <ProductFormCreator></ProductFormCreator> : null}
      <div className={style.containerTitle}>
        <h1>Products</h1>
        <button>New Product</button>
      </div>
      <div className={style.containerSearch}>
        <input
          className={style.search}
          type="text"
          placeholder="search product"
        />
        <button>Search</button>
      </div>
      <TableProduct></TableProduct>
    </div>
  );
}

export default ProductPageAdmin;
