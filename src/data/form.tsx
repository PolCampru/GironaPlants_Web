import type {
  ContactInfoTextType,
  GeneralFormLayoutType,
  GeneralTitleType,
  SuccessMailPopUpType,
} from "../types/form";

export const initialState = {
  company: "",
  name: "",
  phone: "",
  email: "",
  message: "",
  radio: "",
  checkbox: false,
};

export const GeneralTitle: GeneralTitleType = {
  title:
    "Per a facilitar-te una assistència més eficaç i ràpida, indica'ns que necessites",
};

export const SuccessMailPopUp: SuccessMailPopUpType = {
  title: "Gràcies pel teu missatge!",
  imgCross: "/assets/images/contact/crossIcon.svg",
  description: [
    { text: "El teu missatge ha sigut enviat amb èxit!" },
    { text: "En breus ens posarem en contacte" },
  ],
  textHome: "Tornar a la Home",
  imgHome: "/assets/images/contact/homeIcon.svg",
};

export const GeneralFormLayout: GeneralFormLayoutType[] = [
  {
    type: "text",
    name: "company",
    id: "company",
    placeholder: "*Empresa",
    error: "L'empresa introduït no és vàlid.",
  },
  {
    type: "text",
    name: "name",
    id: "name",
    placeholder: "*Nom",
    error: "El nom introduït no és vàlid.",
  },
  {
    type: "text",
    name: "phone",
    id: "phone",
    placeholder: "*Número de telèfon",
    error: "El número de telèfon introduït no és vàlid.",
  },
  {
    type: "text",
    name: "email",
    id: "email",
    placeholder: "*Correu electrònic",
    error: "El correu electrònic introduït no és vàlid.",
  },
  {
    type: "text",
    name: "message",
    id: "message",
    placeholder: "Deixa'ns el teu missatge (Opcional)",
  },
  {
    type: "radio",
    name: "radio",
    id: "radio",
    title: "A quina hora et va bé que et truquem?",
    error: "Selecciona l'horari que t'agradi perquè et truquem.",
  },
  {
    type: "checkbox",
    id: "checkbox",
    name: "checkbox",
  },
  {
    type: "submit",
    name: "submit",
    id: "submit",
    value: "Enviar",
  },
];

export const ContactInfoText: ContactInfoTextType = {
  title: "Esteu al teu costat per ajudar-te amb el que necessitis",
  description1:
    "Esteu interessats en plantes i necessiteu informació, pressupost o assessorament especialitzat sobre els nostres productes? A GironaPlants S.L ens preocupem per vosaltres.",
  description2:
    "  Pots trucar-nos al +34 639 811 560 i t'ajudarem. També ens trobaràs a la carretera de Riells km.1",
};
