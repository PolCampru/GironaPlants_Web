import useContactForm from "../../../hooks/useVerifyForm";

import InputText from "../../../components/Form/InputText";
import InputRadio from "../../../components/Form/InputRadio";
import InputCheckbox from "../../../components/Form/InputCheckbox";
import InputSubmit from "../../../components/Form/InputSubmit";

import SuccessfulDelivery from "../../../components/Form/Contact/SuccessfulDelivery";

import type {
  GeneralFormLayoutType,
  GeneralTitleType,
  StateFormType,
} from "../../../types/form";

const ContactForm = ({
  GeneralFormLayout,
  GeneralTitle,
}: {
  GeneralFormLayout: GeneralFormLayoutType[];
  GeneralTitle: GeneralTitleType;
}) => {
  const {
    stateForm,
    updateState,
    onCheck,
    sendData,
    errors,
    mailSuccess,
    setMailSuccess,
  } = useContactForm();

  const FirstFormLayout = GeneralFormLayout.slice(0, 2);
  const SecondFormLayout = GeneralFormLayout.slice(2);

  return (
    <div className="w-full lg:w-6/12 relative">
      <div
        className={`flex w-11/12 lg:w-full lg:pr-16 mx-auto flex-col justify-center items-center pb-10 pt-36 ${
          mailSuccess ? "blur-sm" : ""
        }`}
      >
        <form className="bg-white text-black px-10 py-10 border rounded-3xl">
          <h3 className="font-interBold text-xl lg:text-2xl pb-6">
            {GeneralTitle.title}
          </h3>
          <div className="flex gap-x-2 lg:gap-x-6 justify-between bg-white">
            {FirstFormLayout.map((input: GeneralFormLayoutType, index) => {
              if (input.type === "text") {
                return (
                  <InputText
                    key={index}
                    name={input.name}
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    value={
                      stateForm[input.name as keyof StateFormType] as string
                    }
                    errorExists={errors.current.includes(input.name)}
                    error={input.error}
                    onWrite={updateState}
                  />
                );
              }
            })}
          </div>
          {SecondFormLayout.map((input: GeneralFormLayoutType, index) => {
            if (input.type === "text") {
              return (
                <InputText
                  key={index}
                  name={input.name}
                  id={input.id}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={stateForm[input.name as keyof StateFormType] as string}
                  errorExists={errors.current.includes(input.name)}
                  error={input.error}
                  onWrite={updateState}
                />
              );
            }
            if (input.type === "radio") {
              return (
                <InputRadio
                  key={index}
                  name={input.name}
                  id={input.id}
                  type={input.type}
                  errorExists={errors.current.includes(input.name)}
                  error={input.error}
                  title={input.title}
                  onWrite={updateState}
                />
              );
            }
            if (input.type === "checkbox") {
              return (
                <InputCheckbox
                  key={index}
                  name={input.name}
                  id={input.id}
                  type={input.type}
                  checked={stateForm.checkbox}
                  errorExists={errors.current.includes(input.name)}
                  onCheck={onCheck}
                />
              );
            }
            if (input.type === "submit") {
              return (
                <InputSubmit
                  key={index}
                  name={input.name}
                  id={input.id}
                  type={input.type}
                  value={input.value}
                  onSubmit={sendData}
                />
              );
            }
          })}
        </form>
      </div>
      {mailSuccess && <SuccessfulDelivery setMailSuccess={setMailSuccess} />}
    </div>
  );
};

export default ContactForm;
