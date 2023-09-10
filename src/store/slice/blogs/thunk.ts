import { createAsyncThunk } from "@reduxjs/toolkit";

export interface BlogsPage {
  id: number;
  url_image: string;
  category: string;
  title: string;
  sub_title: string;
}

export interface BlogsPageText {
  id: number;
  url_image: string;
  category: string;
  title: string;
  sub_title: string;
  listText: {
    id: number;
    text_blog: string;
    id_blog: number;
  }[];
}

export interface CreateBlog {
  image: File;
  category: string;
  title: string;
  sub_title: string;

  texts: string[];

  token: string;
}

export const createBlog = createAsyncThunk(
  "create-blog",
  async (blogData: CreateBlog) => {
    try {
      const formData = new FormData();
      formData.append("image", blogData.image);
      formData.append("category", blogData.category);
      formData.append("title", blogData.title);
      formData.append("sub_title", blogData.sub_title);

      formData.append("texts", JSON.stringify(blogData.texts));

      console.log(formData.get("texts"));

      const response = await fetch(
        "http://localhost:5000/api/v1/blogs/create/blog/",
        {
          method: "POST",
          body: formData,
          headers: {
            authorization: blogData.token,
          },
        }
      );

      if (!response.ok) {
        // Manejar errores de respuesta aquí
        throw new Error("No se pudo crear el blog");
      }

      const data = await response.json();
      console.log(data);

      return true; // Puedes devolver los datos de respuesta si es necesario
    } catch (error) {
      console.log(error);
      // En caso de error, puedes manejarlo aquí
      return false;
    }
  }
);

export const getPageBlog = createAsyncThunk(
  "get-page-blogs",
  async (page: number) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/blogs/page/complete/" + page,
        {
          cache: "no-cache",
        }
      );

      if (!response.ok) {
        throw new Error("Error to fetch blogs");
      }

      const blogs = (await response.json()) as BlogsPageText[];

      return blogs;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
);

export const getBlogOne = createAsyncThunk(
  "get-one-blog",
  async (id: string | number) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/v1/blogs/one/" + id,
        { cache: "no-cache" }
      );

      if (!response.ok) {
        throw new Error("error to fetch one blog");
      }

      const blogSelected = (await response.json()) as BlogsPageText;

      return blogSelected;
    } catch (error) {
      console.log(error);
    }
  }
);
