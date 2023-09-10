import React from "react";
import style from "./style.module.css";
import { ProductCar } from "@/store/slice/car/car";
import Image from "next/image";

function OrdersItem({ product }: { product: ProductCar }) {
  return (
    <div className={style.containerOrderItem}>
      <picture className={style.picture}>
        <Image
          className={style.img}
          width={500}
          height={300}
          src={
            "http://localhost:5000/api/v1/images/products/one/" +
            product.product.id
          }
          alt={product.product.name}
        ></Image>
      </picture>

      <div className={style.container}>
        <div>
          <div className={style.containerText}>
            <div className={style.text}>
              <h2 className={style.titleProduct}>{product.product.name}</h2>
              <p className={style.description}>{product.product.description}</p>
            </div>
            <div>
              <p className={style.countItem}>{product.amount}</p>
              <button className={style.buttonAction}>+</button>
              <button className={style.buttonAction}>-</button>
            </div>

            <div>
              <p className={style.textPrice}>${product.product.price}</p>
              <p className={style.textPrice}>
                Total: {product.amount * product.product.price}
              </p>
              <button className={style.buttonRemove}>Remove</button>
            </div>
          </div>
        </div>
        <div className={style.containerOptions}>
          <h4 className={style.titleH4}>Protection Plan Options</h4>
          <p className={style.textP}>
            Add a Protection Plan, starting at $29.99
          </p>
          <p className={style.textP}>
            Free Norton 360 Standard for 1 Device, 15 Month Subscription
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrdersItem;
