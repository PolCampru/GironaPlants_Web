import { SuccessMailPopUp } from "../../../data/form";

const SuccessfulDelivery = ({ setMailSuccess }: { setMailSuccess: any }) => {
  return (
    <div className="absolute w-8/12 sm:w-[25rem] bg-black text-white text-center pt-3 pb-10 rounded-lg blur-none shadow-[0px_0px_60px_-0px_rgba(209,10,44,1)] top-2/4 left-2/4 transform translate-x-[-50%] lg:translate-x-[-58%] translate-y-[-50%]">
      <div
        className="flex w-full items-end justify-end pr-2 pb-4 cursor-pointer"
        onClick={() => {
          setMailSuccess(false);
        }}
      >
        <img
          className="w-6 h-6"
          src={SuccessMailPopUp.imgCross}
          alt={SuccessMailPopUp.imgCross}
        />
      </div>
      <h3 className="text-xl sm:text-3xl font-interMedium w-11/12 mx-auto pb-4">
        {SuccessMailPopUp.title}
      </h3>
      <div className="pb-8">
        {SuccessMailPopUp.description.map((description, index) => {
          return (
            <p className="w-8/12 mx-auto text-sm" key={index}>
              {description.text}
            </p>
          );
        })}
      </div>
      <a
        className="bg-keiserRed w-8/12 sm:w-6/12 mx-auto rounded-lg py-1.5 text-sm flex justify-center items-center gap-x-2"
        href="/"
      >
        <p>{SuccessMailPopUp.textHome}</p>
        <img
          className="w-4 h-4"
          src={SuccessMailPopUp.imgHome}
          alt={SuccessMailPopUp.imgHome}
        />
      </a>
    </div>
  );
};

export default SuccessfulDelivery;
