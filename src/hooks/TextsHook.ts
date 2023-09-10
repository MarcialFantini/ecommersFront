import React, { useState } from "react";

interface InitialState {
  category: string;
  title: string;
  sub_title: string;
}

interface ItemText {
  text: string;
  id: number;
}

const initialState: InitialState = {
  category: "",
  title: "",
  sub_title: "",
};

export const TextsHook = () => {
  const [count, setCount] = useState(1);
  const [textsItems, setTextsItems] = useState<ItemText[]>([
    { text: "", id: 0 },
  ]);

  const [blog, setBlog] = useState<InitialState>(initialState);
  const [image, setImage] = useState<File | null>();

  const handlerAddNewText = () => {
    setTextsItems([...textsItems, { text: "", id: count }]);
    setCount(count + 1);
  };

  const handlerDel = (id: number) => {
    setTextsItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handlerUpdateText = (
    id: number,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newTextsItems = textsItems.map((item) =>
      item.id === id ? { ...item, text: event.target.value } : item
    );

    setTextsItems(newTextsItems);
  };

  // Handler para actualizar el estado 'blog'
  const handlerUpdateBlog = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setBlog({ ...blog, [name]: value });
  };

  // Handler para actualizar el estado 'image'
  const handlerUpdateImage = (file: File | null) => {
    setImage(file);
  };

  return {
    textsItems,
    handlerAddNewText,
    handlerDel,
    handlerUpdateText,
    blog,
    image,
    handlerUpdateBlog,
    handlerUpdateImage,
  };
};

export default TextsHook;
