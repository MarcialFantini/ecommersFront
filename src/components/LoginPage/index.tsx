"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoginForm from "../LoginForm";
import style from "./style.module.css";

import login from "../../assets/login/login.png";
import RegisterForm from "../RegisterForm";

function LoginPage() {
  const [isRegister, setIsRegister] = useState(true);

  const handlerToggle = () => setIsRegister(!isRegister);

  return (
    <div className={style.containerLogin}>
      <picture className={style.picture}>
        <Image className={style.img} src={login} alt=""></Image>
      </picture>
      {!isRegister ? (
        <LoginForm handlerToggle={handlerToggle}></LoginForm>
      ) : (
        <RegisterForm handlerToggle={handlerToggle}></RegisterForm>
      )}
    </div>
  );
}

export default LoginPage;
