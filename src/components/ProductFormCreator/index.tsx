import { ProductFormCreate } from "@/interfaces/DB";
import React, { useState } from "react";

import style from "./style.module.css";
import { useAppDispatch } from "@/store/hooks";
import { thunkCreateProduct } from "@/store/slice/products/thunks";

function ProductFormCreator({ toggleActive }: { toggleActive: () => void }) {
  const initialProduct: ProductFormCreate = {
    name: "",
    price: 0,
    amount: 0,
    image: null,

    description: "",
  };

  const [product, setProduct] = useState<ProductFormCreate>(initialProduct);

  const dispatch = useAppDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0] || null;
    setProduct((prevProduct) => ({
      ...prevProduct,
      image: selectedImage,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del producto al servidor

    dispatch(thunkCreateProduct(product));
    toggleActive();
  };

  return (
    <div className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <button onClick={toggleActive}>X</button>

        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="price">
          Price:
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="amount">
          Amount:
          <input
            type="number"
            id="amount"
            name="amount"
            value={product.amount}
            onChange={handleInputChange}
          />
        </label>

        <label htmlFor="image">
          Image
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*" // Aceptar solo archivos de imagen
            onChange={handleImageChange}
          />
        </label>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default ProductFormCreator;
