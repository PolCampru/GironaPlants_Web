import { useState, useRef } from "react";

import { initialState } from "../data/form";

import type { StateFormType } from "../types/form";

import sendMail from "../utils/sendMail";

const useContactForm = () => {
  const [stateForm, setStateForm] = useState<StateFormType>(initialState);

  const [mailSuccess, setMailSuccess] = useState<boolean>(false);

  const errors = useRef<string[]>([]);

  const updateState = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setStateForm({
      ...stateForm,
      [name]: value,
    });
    validate(name, value);
  };

  const onCheck = (checkState: boolean) => {
    setStateForm({
      ...stateForm,
      checkbox: checkState,
    });
    validate("checkbox", checkState);
  };

  const validate = (name: string, value: string | boolean) => {
    let regex = undefined;
    if (name === "phone") {
      regex = /^\d{9}$/;
    } else if (name === "email") {
      regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    } else if (name === "name") {
      regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s-]+$/u;
    }
    if (regex) {
      if (!regex.test(value as string)) {
        if (!errors.current.includes(name)) errors.current.push(name);
      } else {
        if (errors.current.indexOf(name) !== -1)
          errors.current.splice(errors.current.indexOf(name), 1);
      }
    } else if (name === "checkbox") {
      if (value === false) {
        if (!errors.current.includes(name)) errors.current.push(name);
        return false;
      } else {
        if (errors.current.indexOf(name) !== -1)
          errors.current.splice(errors.current.indexOf(name), 1);
      }
    } else {
      if (value === "" && name != "message") {
        if (!errors.current.includes(name)) errors.current.push(name);
      } else {
        if (errors.current.indexOf(name) !== -1)
          errors.current.splice(errors.current.indexOf(name), 1);
      }
    }
  };

  const sendData = async (event: React.MouseEvent<HTMLElement>) => {
    for (let input in stateForm) {
      validate(input, stateForm[input as keyof typeof stateForm]);
    }

    if (errors.current.length > 0) {
      event.preventDefault();
      onCheck(stateForm.checkbox);

      return false;
    }

    try {
      await sendMail(stateForm);
    } catch (error) {
      console.log(error);
    } finally {
      setMailSuccess(true);
      setStateForm(initialState);
    }
  };

  return {
    errors,
    updateState,
    onCheck,
    sendData,
    stateForm,
    mailSuccess,
    setMailSuccess,
  };
};

export default useContactForm;
