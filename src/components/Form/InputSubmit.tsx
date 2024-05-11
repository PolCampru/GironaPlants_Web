import React from "react";

const InputSubmit = ({
  name,
  id,
  type,
  value,
  onSubmit,
}: {
  name: string;
  id: string;
  type: string;
  value: string;
  onSubmit: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
    onSubmit(event);
  };

  const image = "/assets/images/contact/sendIcon.svg";

  return (
    <div
      className="w-full bg-keiserRed p-2 rounded-xl text-white flex justify-center items-center gap-x-2 cursor-pointer bg-gpgreen"
      onClick={handleSubmit}
    >
      <img className="w-4 h-4" src={image} alt={image} />
      <input
        className="cursor-pointer"
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={(event) => event.preventDefault()}
      />
    </div>
  );
};

export default InputSubmit;
