"use client";
import React from "react";
import style from "./style.module.css";
import { TextsHook } from "@/hooks/TextsHook";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { createBlog } from "@/store/slice/blogs/thunk";

function FormBlog() {
  const token = useAppSelector((state) =>
    state.login.token ? state.login.token : ""
  );
  const dispatch = useAppDispatch();
  const {
    textsItems,
    handlerAddNewText,
    handlerDel,
    handlerUpdateText,
    blog,
    image,
    handlerUpdateBlog,
    handlerUpdateImage,
  } = TextsHook();

  const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (image) {
      dispatch(
        createBlog({
          image,
          ...blog,
          texts: textsItems.map((item) => item.text),
          token: token,
        })
      );
    }
  };

  return (
    <form onSubmit={handlerSubmit} className={style.form}>
      <div className={style.ColumnDiv}>
        <label htmlFor="category">Categoría:</label>
        <input
          className={style.inputForm}
          type="text"
          id="category"
          name="category"
          value={blog.category} // Agregar el valor del estado 'category'
          onChange={handlerUpdateBlog} // Llamar al handler para actualizar 'category'
        />
      </div>
      <div className={style.ColumnDiv}>
        <label htmlFor="title">Título:</label>
        <input
          className={style.inputForm}
          type="text"
          id="title"
          name="title"
          value={blog.title} // Agregar el valor del estado 'title'
          onChange={handlerUpdateBlog} // Llamar al handler para actualizar 'title'
        />
      </div>
      <div className={style.ColumnDiv}>
        <label htmlFor="subtitle">Subtitle:</label>
        <input
          className={style.inputForm}
          type="text"
          id="subtitle"
          name="sub_title"
          value={blog.sub_title} // Agregar el valor del estado 'sub_title'
          onChange={handlerUpdateBlog} // Llamar al handler para actualizar 'sub_title'
        />
      </div>
      <div className={style.ColumnDiv}>
        <label htmlFor="fileInput">Selecciona una imagen:</label>

        <img src={image ? URL.createObjectURL(image) : ""} alt="hola"></img>

        <input
          className={style.inputForm}
          type="file"
          id="fileInput"
          accept="image/*"
          name="fileInput"
          onChange={(event) => {
            if (event.target.files) {
              handlerUpdateImage(event.target.files[0]);
            } // Llamar al handler para actualizar 'image'
          }}
        />
      </div>
      <div className={style.textContainer}>
        {textsItems.map((item) => (
          <div className={style.textFlex} key={item.id}>
            <textarea
              className={style.inputText}
              onChange={(event) => {
                handlerUpdateText(item.id, event);
              }}
              name={`textItem${item.id}`}
            />

            <button
              className={style.buttonDelText}
              onClick={() => handlerDel(item.id)}
            >
              -
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={(event) => {
          event.preventDefault();
          handlerAddNewText();
        }}
        className={style.button}
      >
        Add Text
      </button>
      <button className={style.button}>Enviar</button>
    </form>
  );
}

export default FormBlog;
