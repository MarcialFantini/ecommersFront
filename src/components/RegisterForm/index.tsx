"use client";
import React from "react";

import style from "./style.module.css";
import { useForm } from "@/hooks/useForm";

function RegisterForm({ handlerToggle }: { handlerToggle: () => void }) {
  const initialState = {
    name: "",
    password: "",
    email: "",
  };

  const { state, handlerOnChange, handlerOnSubmit } = useForm({
    initialState: initialState,
    onSubmit: console.log,
  });

  return (
    <div className={style.containerAll}>
      <h2 className={style.title}>Register user!</h2>
      <form className={style.form}>
        <label className={style.label}>
          <div
            className={
              style.textAbsolute +
              " " +
              (state.name.length > 0 ? style.textHidden : "")
            }
          >
            <p>Name</p>
          </div>
          <input
            onChange={handlerOnChange}
            className={style.input}
            value={state.name}
            type="text"
            name="name"
          />
        </label>
        <label className={style.label}>
          <div
            className={
              style.textAbsolute +
              " " +
              (state.email.length > 0 ? style.textHidden : "")
            }
          >
            <p>Email</p>
          </div>
          <input
            onChange={handlerOnChange}
            className={style.input}
            value={state.email}
            name="email"
            type="text"
          />
        </label>
        <label className={style.label}>
          <div
            className={
              style.textAbsolute +
              " " +
              (state.password.length > 0 ? style.textHidden : "")
            }
          >
            <p>Password</p>
          </div>
          <input
            onChange={handlerOnChange}
            className={style.input}
            value={state.password}
            name="password"
            type="password"
          />
        </label>

        <button className={style.button}>Register</button>

        <button onClick={handlerToggle} className={style.button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
