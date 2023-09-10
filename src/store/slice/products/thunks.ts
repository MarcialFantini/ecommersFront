import { BaseRouterApi } from "@/constant/router";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface productForCreate {
  image: File | null;
  name: string;
  price: number;
  amount: number;
  description: string;
}

interface productsList {
  id: number;
  name: string;
  price: number;
  amount: number;
  description: string;
}

export const thunkCreateProduct = createAsyncThunk(
  "thunk-create-product",
  async (props: { body: productForCreate; token: string }) => {
    try {
      const bodyPost = new FormData();

      Object.entries(props.body).forEach(([key, value]) => {
        console.log(key, value);
        bodyPost.append(key, value);
      });

      const response = await fetch(BaseRouterApi + "/products/create", {
        method: "POST",
        cache: "no-cache",
        body: bodyPost,
        headers: {
          Authorization: props.token,
        },
      });

      console.log(response);

      if (!response.ok) {
        throw new Error("no response");
      }

      return true;
    } catch (error) {
      console.log(error);

      return false;
    }
  }
);

export interface ItemPage {
  id: number;
  name: string;
  price: number;
  amount: number;
  description: string;
}
export const thunkGetPageProduct = createAsyncThunk(
  "thunk-get-page-product",
  async (page: number) => {
    try {
      const response = await fetch(BaseRouterApi + "/products/page/" + page, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("no response");
      }

      const data: productsList[] = await response.json();

      console.log(data);
      const list = data.sort((a, b) => a.id - b.id);

      return list;
    } catch (error) {
      console.log(error);
    }
  }
);

export const thunkGetProductProduct = createAsyncThunk(
  "thunk-get-one-product",
  async (id: number) => {
    try {
      const response = await fetch(BaseRouterApi + "/products/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("no response");
      }

      return response;
    } catch (error) {
      console.log(error);

      return false;
    }
  }
);

export const thunkUpdateProduct = createAsyncThunk(
  "thunk-update-product",
  async (body: any) => {
    try {
      const response = await fetch(BaseRouterApi + "/products/create", {
        method: "PATCH",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error("no response");
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const thunkDeleteProduct = createAsyncThunk(
  "thunk-delete-product",
  async (id: number) => {
    try {
      const response = await fetch(BaseRouterApi + "/products/delete/" + id, {
        method: "DELETE",
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error("no response");
      }

      return true;
    } catch (error) {
      console.log(error);
    }
  }
);
