import { useState } from "react";

export default function useForm(initialForm = {}) {

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(formState)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    setFormState
  }

}