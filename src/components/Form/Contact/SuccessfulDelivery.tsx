import { Home, X } from "tabler-icons-react";
import { SuccessMailPopUp } from "../../../data/form";

const SuccessfulDelivery = ({ setMailSuccess }: { setMailSuccess: any }) => {
  return (
    <div className="absolute w-8/12 sm:w-[25rem] bg-black text-white text-center pt-3 pb-10 rounded-lg blur-none shadow-[0px_0px_60px_-0px_rgba(74,123,57,1)] top-2/4 left-2/4 transform translate-x-[-50%] lg:translate-x-[-58%] translate-y-[-50%]">
      <div
        className="flex w-full items-end justify-end pr-2 pb-4 cursor-pointer bg-transparent"
        onClick={() => {
          setMailSuccess(false);
        }}
      >
        <span>
          <X size={18} />
        </span>
      </div>
      <h3 className="text-xl sm:text-3xl font-interMedium w-11/12 mx-auto pb-4">
        {SuccessMailPopUp.title}
      </h3>
      <div className="pb-8 bg-transparent">
        {SuccessMailPopUp.description.map((description, index) => {
          return (
            <p className="w-8/12 mx-auto text-sm" key={index}>
              {description.text}
            </p>
          );
        })}
      </div>
      <a
        className="bg-gpgreen w-8/12 sm:w-6/12 mx-auto rounded-lg py-1.5 text-sm flex justify-center items-center gap-x-2"
        href="/"
      >
        <p>{SuccessMailPopUp.textHome}</p>
        <span className="bg-transparent">
          <Home size={18} style={{ background: "transparent" }} />
        </span>
      </a>
    </div>
  );
};

export default SuccessfulDelivery;
