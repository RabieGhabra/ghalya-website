import { Button } from "../../ui/button";
import jumboIcon from "../../../assets/icons/ghalya-logo.png";

export default function CTA() {
  return (
    <section className="mx-auto my-20 sm:my-24 lg:my-27 flex w-full justify-center px-4 sm:px-10 lg:px-16">
      <div
        className="relative flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12 rounded-[30px] bg-cover bg-center px-6 py-10 sm:px-12 lg:px-20 overflow-hidden"
        style={{
          backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/CTA-bg.png')`,
          width: "100%",
          maxWidth: "1684px",
          minHeight: "270px",
        }}
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 z-10">
          <h3 className="font-['Lexend_Deca',Helvetica] font-extralight text-[28px] sm:text-[40px] lg:text-[74px] leading-tight lg:leading-18.25 tracking-tighter text-gray-300 text-center sm:text-left">
            Partner with
          </h3>
          <img
            src={jumboIcon.src}
            alt="Ghalya logo"
            className="shrink-0 opacity-90 w-20 sm:w-30 lg:w-49 h-auto object-contain"
          />
        </div>
        {/* RIGHT SIDE */}
        <Button
          type="button"
          className="cursor-pointer w-32 sm:w-40 lg:w-51.5 h-10 sm:h-12 lg:h-15 shrink-0 rounded-[30px] border border-solid border-black bg-white shadow-[0px_4px_4px_#00000040] hover:bg-white z-10 flex items-center justify-center"
        >
          <span className="bg-[linear-gradient(98.15deg,#E51C5C_-39.42%,#38113F_113.67%)] bg-clip-text text-transparent font-['Lexend_Deca',Helvetica] font-medium text-xs sm:text-sm lg:text-lg leading-[100%] tracking-normal text-center">
            Become a Partner
          </span>
        </Button>
      </div>
    </section>
  );
}