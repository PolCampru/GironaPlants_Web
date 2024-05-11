import type { ContactInfoTextType } from "../../../types/form";

const ContactInfo = ({
  ContactInfoText,
}: {
  ContactInfoText: ContactInfoTextType;
}) => {
  return (
    <div className="w-11/12 lg:w-6/12 lg:pl-16 text-white flex flex-col items-center lg:items-start justify-center pb-10 relative">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-full lg:w-9/12 font-interBold mb-4 lg:mb-6 xl:mb-8 z-10">
        {ContactInfoText.title}
      </h3>
      <p className="text-sm md:text-base w-full lg:w-9/12 mb-3 lg:mb-6 xl:mb-8 z-10">
        {ContactInfoText.description1}
      </p>
      <p className="text-sm md:text-base w-full lg:w-9/12 mb-4 lg:mb-8 xl:mb-10 z-10">
        {ContactInfoText.description2}
      </p>

      <div className="absolute w-[496px] h-[482px] min-w-[350px] min-h-[350px] top-[0rem] right-[0rem] lg:right-[-20rem] lg:top-[10rem] rounded-full bg-keiserRedBlur blur-3xl"></div>
    </div>
  );
};

export default ContactInfo;
