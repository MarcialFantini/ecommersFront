"use client";
import { useState, ChangeEvent } from "react";

interface UseFormOptions<T> {
  initialState: T;
}

export const useForm = <T extends Record<string, string>>({
  initialState,
}: UseFormOptions<T>) => {
  const [state, setState] = useState<T>(initialState);

  const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return { handlerOnChange, state };
};
