"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import style from "./style.module.css";

import objeto from "../../../../assets/objectoPrueba/person.jpg";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addProductToCar } from "@/store/slice/car/car";
import Link from "next/link";

interface props {
  params: { id: string };
}

interface product {
  id: number;
  name: string;
  price: number;
  amount: number;
  description: string;
}

export default function ProductRouter({ params }: props) {
  const dispatch = useAppDispatch();

  const [product, setProduct] = useState<product | null>(null);
  const handlerDispatch = () => {
    if (product?.id) {
      dispatch(addProductToCar(product));
    }
  };

  const amount = useAppSelector((state) =>
    state.car.listOfProducts.find(
      (productCar) => productCar.product.id === product?.id
    )
  )?.amount;

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/products/one/" + params.id, {
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={style.containerProduct}>
      <picture className={style.picture}>
        <Image
          width={600}
          height={300}
          className={style.img}
          src={
            product
              ? "http://localhost:5000/api/v1/images/products/one/" + product.id
              : objeto
          }
          alt="a"
        ></Image>
      </picture>

      <div className={style.containerProductRight}>
        <h1 className={style.title}>{product?.name}</h1>
        <p className={style.description}>{product?.description}</p>
        <p className={style.price}>${product?.price}</p>
        <button onClick={handlerDispatch} className={style.button}>
          BUY NOW
        </button>
        {amount ? (
          <Link href={"/car/"} className={style.button}>
            GO to Car
          </Link>
        ) : (
          0
        )}
      </div>
    </div>
  );
}
