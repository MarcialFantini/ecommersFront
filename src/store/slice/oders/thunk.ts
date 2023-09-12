import { createAsyncThunk } from "@reduxjs/toolkit";

export interface OrderGetItem {
  id: number;
  id_usuario: number;
  id_product: number;
  amount: number;
}

export const getOrders = createAsyncThunk(
  "get-orders",
  async (props: { page: number; token: string }, { rejectWithValue }) => {
    console.log(props.token);

    const headers = {
      "Content-Type": "application/json",
      Authorization: props.token,
    };
    console.log(headers);
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/orders/page/${props.page}`,
        {
          cache: "no-cache",

          headers,
        }
      );

      if (!response.ok) {
        // Puedes manejar errores de solicitud aquí
        const errorData = await response.json();
        return rejectWithValue(errorData);
      }

      const pageOrders = (await response.json()) as OrderGetItem[];

      return pageOrders;
    } catch (error) {
      // Manejo de errores generales
      return rejectWithValue({ message: "Error al obtener las órdenes" });
    }
  }
);

export interface OrderProductCreator {
  id_product: number;
  amount: number;
}

export interface PropsOrderCreator {
  token: string;
  list: OrderProductCreator[];
}

export const createOrder = createAsyncThunk(
  "create-order",
  async (props: PropsOrderCreator, { rejectWithValue }) => {
    try {
      const promises = props.list.map((order) => {
        return fetch("http://localhost:5000/api/v1/orders/create", {
          method: "POST",
          headers: {
            Authorization: props.token, // Asegúrate de usar el formato correcto para el token
            "Content-Type": "application/json", // Especifica el tipo de contenido
          },
          body: JSON.stringify(order),
        }).then((response) => {
          if (!response.ok) {
            throw new Error("Error en la solicitud");
          }
          return response.json();
        });
      });

      const data = await Promise.allSettled(promises);

      // Puedes procesar la respuesta del servidor aquí si es necesario

      return data;
    } catch (error) {
      // Puedes usar rejectWithValue para pasar el error al reducer
      return rejectWithValue(error);
    }
  }
);
