import { useState, ChangeEvent } from "react";

interface UseFormOptions<T> {
  initialState: T;
  onSubmit: () => void;
}

export const useForm = <T extends Record<string, string>>({
  initialState,
  onSubmit,
}: UseFormOptions<T>) => {
  const [state, setState] = useState<T>(initialState);

  const handlerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlerOnSubmit = () => {
    onSubmit();
  };

  return { handlerOnChange, handlerOnSubmit, state };
};
