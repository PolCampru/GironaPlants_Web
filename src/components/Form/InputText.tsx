import React from "react";

const InputText = ({
  name,
  id,
  type,
  placeholder,
  value,
  errorExists,
  error,
  onWrite,
}: {
  name: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  errorExists: boolean;
  error?: string;
  onWrite: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onWrite(event);
  };

  return (
    <div
      className={`w-full bg-white text-white ${
        errorExists ? "pb-0" : "pb-4 lg:pb-6"
      }`}
    >
      {name !== "message" && (
        <input
          className={`border w-full bg-white p-1.5 pl-3 rounded-lg bg-lightGray shadow-inner focus:outline-none text-sm sm:text-base text-black ${
            errorExists
              ? "border-errorRed focus:border-errorRed"
              : "border-transparent focus:border-darkgray2"
          }`}
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
      {name === "message" && (
        <textarea
          className="border w-full p-1.5 pl-3 rounded-lg bg-lightGray shadow-inner focus:outline-none text-sm sm:text-base text-black bg-white"
          name={name}
          id={id}
          rows={4}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}

      {errorExists && <p className="text-errorRed text-base">{error}</p>}
    </div>
  );
};

export default InputText;
