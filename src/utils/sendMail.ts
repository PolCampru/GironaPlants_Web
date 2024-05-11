import type { StateFormType } from "../types/form";

const sendMail = async (stateForm: StateFormType) => {
  const response = await fetch("/api/send-mail", {
    method: "POST",
    body: JSON.stringify(stateForm),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 500) alert("Internal error");
};

export default sendMail;
