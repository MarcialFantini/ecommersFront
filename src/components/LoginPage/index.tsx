"use client";
import Image from "next/image";
import React, { useState } from "react";
import LoginForm from "../LoginForm";
import style from "./style.module.css";

import login from "../../assets/login/login.png";
import RegisterForm from "../RegisterForm";
import { useAppSelector } from "@/store/hooks";

function LoginPage() {
  const [isRegister, setIsRegister] = useState(true);

  const handlerToggle = () => setIsRegister(!isRegister);

  const registerNow = useAppSelector((state) => state.login.isRegister);

  return (
    <div className={style.containerLogin}>
      <picture className={style.picture}>
        <Image className={style.img} src={login} alt=""></Image>
      </picture>
      {!isRegister || registerNow ? (
        <LoginForm handlerToggle={handlerToggle}></LoginForm>
      ) : (
        <RegisterForm handlerToggle={handlerToggle}></RegisterForm>
      )}
    </div>
  );
}

export default LoginPage;
