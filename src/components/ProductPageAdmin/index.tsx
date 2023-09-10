"use client";

import { useEffect, useState } from "react";

import style from "./style.module.css";
import ProductsList from "../ProductsList";
import TableProduct from "../TableProduct";
import ProductFormCreator from "../ProductFormCreator";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { thunkGetPageProduct } from "@/store/slice/products/thunks";

function ProductPageAdmin() {
  const dispatch = useAppDispatch();
  const [isActiveCreate, setIsActiveCreate] = useState(false);
  const [count, setCount] = useState(0);

  const lengthListProduct = useAppSelector(
    (state) => state.products.listProducts.length
  );

  const toggleActive = () => setIsActiveCreate(!isActiveCreate);

  const handlerNextPage = () => {
    if (lengthListProduct >= 12) {
      dispatch(thunkGetPageProduct(count + 1));
      setCount(count + 1);
    }
  };

  const handlerLessPage = () => {
    if (count - 1 >= 0) {
      dispatch(thunkGetPageProduct(count - 1));
      setCount(count - 1);
    }
  };

  useEffect(() => {
    dispatch(thunkGetPageProduct(0));
  }, []);

  return (
    <div>
      {isActiveCreate ? (
        <ProductFormCreator toggleActive={toggleActive}></ProductFormCreator>
      ) : null}
      <div className={style.containerTitle}>
        <h1>Products</h1>
        <button className={style.buttonNormal} onClick={toggleActive}>
          New Product
        </button>
      </div>
      <div className={style.containerSearch}>
        <input
          className={style.search}
          type="text"
          placeholder="search product"
        />
        <button className={style.buttonNormal}>Search</button>
      </div>
      <div className={style.containerSearch}>
        <button className={style.buttonNormal} onClick={handlerLessPage}>
          Before
        </button>
        <button className={style.buttonNormal} onClick={handlerNextPage}>
          Next
        </button>
      </div>
      <TableProduct></TableProduct>
    </div>
  );
}

export default ProductPageAdmin;
