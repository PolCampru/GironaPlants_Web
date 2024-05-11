import React from "react";

const InputRadio = ({
  name,
  id,
  type,
  errorExists,
  error,
  title,
  onWrite,
}: {
  name: string;
  id: string;
  type: string;
  errorExists: boolean;
  error: string;
  title: string;
  onWrite: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onWrite(event);
  };

  return (
    <div className="w-full flex flex-col bg-white">
      <p className="mb-3">{title}</p>
      <label className="mb-3 flex items-center bg-white">
        <input
          className={`${
            errorExists ? "appearance-none border-keiserRed" : "border-darkGray"
          } mr-2 border h-4 w-4 rounded-full`}
          name={name}
          id={id + "1"}
          type={type}
          value="Pel matí (de 8h a 14h)"
          onChange={handleChange}
        />
        Por la mañana (de 8h a 14h)
      </label>

      <label
        className={`${
          errorExists ? "mb-0 lg:mb-3" : " mb-8 lg:mb-12"
        }  flex items-center bg-white`}
      >
        <input
          className={`${
            errorExists ? "appearance-none border-keiserRed" : "border-darkGray"
          }  mr-2 border h-4 w-4 rounded-full`}
          name={name}
          id={id + "2"}
          type={type}
          value="Per la tarda (de 16h a 18h)"
          onChange={handleChange}
        />
        Por la tarde (de 16h a 18h)
      </label>
      {errorExists && <p className="text-keiserRed mb-2 lg:mb-3">{error}</p>}
    </div>
  );
};

export default InputRadio;
