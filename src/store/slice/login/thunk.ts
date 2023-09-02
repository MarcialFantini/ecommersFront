import { createAsyncThunk } from "@reduxjs/toolkit";

interface registerUser {
  name: string;
  password: string;
  email: string;
}

interface LoginUser {
  email: string;
  password: string;
}

interface Message {
  message: string;
  code: number;
}

interface MessageLogin {
  token: string;
  code: number;
}

export const createUserThunk = createAsyncThunk(
  "create-user-thunk",
  async (user: registerUser) => {
    try {
      const resMessage = await fetch(
        "http://localhost:5000/api/v1/login/register",
        {
          method: "POST",
          body: await JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!resMessage.ok) {
        throw new Error("error in request");
      }

      const message = (await resMessage.json()) as Message;

      if (message.code !== 201) {
        throw new Error("no created");
      }

      return { data: true };
    } catch (error) {
      console.log(error);
      return false;
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "login-user-thunk",
  async (user: LoginUser) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/login/login", // Asegúrate de que esta URL sea la correcta para tu API de inicio de sesión.
        {
          method: "POST", // Utiliza el método POST para la solicitud de inicio de sesión.
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user), // Convierte el objeto user a JSON y envíalo en el cuerpo de la solicitud.
        }
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud"); // Puedes personalizar el mensaje de error según tus necesidades.
      }

      const message: MessageLogin = await response.json();

      if (message.code !== 200) {
        throw new Error("Inicio de sesión fallido"); // Puedes personalizar el mensaje de error según tus necesidades.
      }

      return message.token;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
);
