import React from "react";
import { Send } from "tabler-icons-react";

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

  return (
    <div
      className="w-full p-2 rounded-xl text-white flex justify-center items-center gap-x-2 cursor-pointer bg-gpgreen"
      onClick={handleSubmit}
    >
      <span className="bg-gpgreen">
        <Send size={18} style={{ background: "transparent" }} />
      </span>
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
