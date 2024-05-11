export type StateFormType = {
  company: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  radio: string;
  checkbox: boolean;
};

export type SuccessMailPopUpType = {
  title: string;
  imgCross: string;
  description: { text: string }[];
  textHome: string;
  imgHome: string;
};

export type GeneralTitleType = {
  title: string;
};

export type ContactInfoTextType = {
  title: string;
  description1: string;
  description2: string;
};

// Forms
export type GeneralFormLayoutType =
  | InputTextType
  | InputRadioType
  | InputSubmitType
  | InputCheckboxType;

type CommonType = {
  type: "text" | "radio" | "checkbox" | "submit";
  id: string;
  name: string;
};

type InputTextType = CommonType & {
  type: "text";
  placeholder: string;
  error?: string;
};

type InputRadioType = CommonType & {
  type: "radio";
  title: string;
  error: string;
};

type InputSubmitType = CommonType & {
  type: "submit";
  value: string;
};

type InputCheckboxType = {
  type: "checkbox";
  name: string;
  id: string;
};
