"use client";
import React from "react";

import style from "./style.module.css";
import { useForm } from "@/hooks/useForm";
import { useAppDispatch } from "@/store/hooks";
import { loginUserThunk } from "@/store/slice/login/thunk";

function LoginForm({ handlerToggle }: { handlerToggle: () => void }) {
  const dispatch = useAppDispatch();
  const initialState = {
    password: "",
    email: "",
  };
  const { state, handlerOnChange } = useForm({
    initialState: initialState,
  });
  const handlerDispatch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUserThunk(state));
  };

  return (
    <div className={style.containerAll}>
      <form onSubmit={handlerDispatch} className={style.form}>
        <label className={style.label} htmlFor="username">
          <input
            className={style.input}
            onChange={handlerOnChange}
            type="text"
            id="username"
            name="email"
            value={state.email}
            required
          />
          <div className={style.containerText}>
            <p
              className={
                style.textAbsolute +
                " " +
                (state.email.length > 0 ? style["hiddenText"] : "")
              }
            >
              email
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
