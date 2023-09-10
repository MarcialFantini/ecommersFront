"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import LoginForm from "../LoginForm";
import style from "./style.module.css";

import login from "../../assets/login/login.png";
import RegisterForm from "../RegisterForm";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";

function LoginPage() {
  const routerPush = useRouter();
  const [isRegisterActiveLogin, setIsRegister] = useState(true);

  const handlerToggle = () => setIsRegister(!isRegisterActiveLogin);

  const { token, isRegister } = useAppSelector((state) => state.login);

  const handlerPushRouter = () => routerPush.push("/");

  useEffect(() => {
    console.log(token);
    if (token) {
      setTimeout(handlerPushRouter, 500);
    }
  }, [isRegister, routerPush]);

  return (
    <div className={style.containerLogin}>
      <picture className={style.picture}>
        <Image className={style.img} src={login} alt=""></Image>
      </picture>
      {!isRegisterActiveLogin || isRegister ? (
        <LoginForm handlerToggle={handlerToggle}></LoginForm>
      ) : (
        <RegisterForm handlerToggle={handlerToggle}></RegisterForm>
      )}
    </div>
  );
}

export default LoginPage;
