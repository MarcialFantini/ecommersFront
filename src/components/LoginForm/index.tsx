"use client";
import React from "react";

import style from "./style.module.css";
import { useForm } from "@/hooks/useForm";

function LoginForm({ handlerToggle }: { handlerToggle: () => void }) {
  const initialState = {
    password: "",
    name: "",
  };

  const handlerDispatch = () => {};

  const { state, handlerOnChange, handlerOnSubmit } = useForm({
    initialState: initialState,
    onSubmit: handlerDispatch,
  });

  return (
    <div className={style.containerAll}>
      <form className={style.form}>
        <label className={style.label} htmlFor="username">
          <input
            className={style.input}
            onChange={handlerOnChange}
            type="text"
            id="username"
            name="name"
            value={state.name}
            required
          />
          <div className={style.containerText}>
            <p
              className={
                style.textAbsolute +
                " " +
                (state.name.length > 0 ? style["hiddenText"] : "")
              }
            >
              User
            </p>
          </div>
        </label>

        <label className={style.label} htmlFor="password">
          <input
            onChange={handlerOnChange}
            className={style.input}
            type="password"
            id="password"
            name="password"
            value={state.password}
            required
          />
          <div className={style.containerText}>
            <p
              className={
                style.textAbsolute +
                " " +
                (state.password.length > 0 ? style["hiddenText"] : "")
              }
            >
              Password
            </p>
          </div>
        </label>

        <button className={style.button} type="submit">
          Iniciar sesión
        </button>

        <button onClick={handlerToggle} className={style.button}>
          Register
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
