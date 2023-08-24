export interface User {
  id: number;
  name: string;
  isAdmin: boolean;
  password: string;
  email: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export interface ProductFormCreate {
  image: File | null;
  name: string;
  price: number;
  amount: number;
  description: string;
}

export interface Order {
  id: number;
  id_usuario: number;
  id_product: number;
  amount: number;
}

export interface ImageProduct {
  id: number;
  url: string;
  id_product: number;
}

export interface Blog {
  id: number;
  url_image: string;
  category: string;
  title: string;
  sub_title: string;
}

export interface BlogText {
  id: number;
  text_blg: string;
  id_blog: number;
}
