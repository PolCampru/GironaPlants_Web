const InputCheckbox = ({
  name,
  id,
  type,
  checked,
  errorExists,
  onCheck,
}: {
  name: string;
  id: string;
  type: string;
  checked: boolean;
  errorExists: boolean;
  onCheck: (isChecked: boolean) => void;
}) => {
  const handleChange = () => {
    onCheck(!checked);
  };

  return (
    <div className="w-full pb-6 bg-white">
      <label
        htmlFor={id}
        className="flex items-starslg:items-center text-sm lg:text-base gap-x-2 bg-white"
      >
        <input
          className={`${
            errorExists
              ? "border-keiserRed appearance-none border rounded-sm bg-white"
              : ""
          }  h-3.5 w-3.5`}
          name={name}
          id={id}
          type={type}
          checked={checked}
          onChange={handleChange}
        />
        <p
          className={`${
            errorExists ? "text-keiserRed" : ""
          } w-11/12 leading-none bg-white text-base`}
        >
          Acepto los{" "}
          <span className="underline bg-white text-base">
            Términos y Condiciones
          </span>{" "}
          y la{" "}
          <span className="underline bg-white text-base">
            Política de Privacidad
          </span>
        </p>
      </label>
    </div>
  );
};

export default InputCheckbox;
