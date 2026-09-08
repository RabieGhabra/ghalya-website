import { Button } from "../../ui/button";
import Header from "../../layout/Header";
import Image from "next/image";
// IMAGES
import mask1 from "../../../assets/images/Mask group-1.png";
import mask2 from "../../../assets/images/Mask group-2.png";
// ICONS
import icon1 from "../../../assets/icons/group-2147226416.png";
import icon2 from "../../../assets/icons/group-1171275428.png";
export default function HeroSection() {
  return (
    <section
      className="relative mx-auto flex w-full min-h-125 sm:min-h-180 lg:min-h-237.5 flex-col gap-8 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/hero-bg.png')`,
      }}
    >
      <Header />
      {/* WRAPPER */}
      <div className="relative mx-auto w-full max-w-5xl mt-6 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10">
        {/* LEFT TOP IMAGE */}
        <Image
          className="hidden md:block absolute left-8 lg:left-10 xl:-left-10 top-0 rotate-[-18deg] w-[220.87px] h-[290.40px]"
          alt="Mask group"
          src={mask1}
        />
        {/* RIGHT BOTTOM IMAGE */}
        <Image
          className="hidden md:block absolute bottom-18 right-6 lg:right-4 xl:right-12 rotate-18 w-[220.87px]"
          alt="Mask group"
          src={mask2}
        />
        {/* LEFT SMALL ICON */}
        <Image
          className="hidden md:block absolute left-2  xl:-left-16 top-25 rotate-12 w-[61.03px] h-[61.03px]"
          alt="Icon"
          src={icon1}
        />
        {/* RIGHT SMALL ICON */}
        <Image
          className="hidden md:block absolute bottom-26 right-6 xl:right-12 -rotate-12 w-[61.03px] h-[61.03px]"
          alt="Icon"
          src={icon1}
        />
        {/* CONTENT */}
        <div
          className="relative mt-10 lg:mt-16 flex w-full max-w-5xl flex-col items-center text-center pb-12
                md:-translate-x-4 lg:-translate-x-10 xl:-translate-x-16"
        >
          <div className="relative w-full">
            {/* FLOATING LOGO */}
            <Image
              className="
              hidden md:block
              absolute
              right-[39%]
              -top-8
              xl:right-[35%]
              xl:-top-15
              lg:right-[36%]
              lg:-top-10
              rotate-12
              z-20
              w-12 md:w-16 lg:w-20 xl:w-24
              h-auto
              "
              alt="Ghalya logo"
              src={icon2}
            />
            {/* TITLE */}
            <div className="flex flex-col items-center w-full">
              {/* ELEVATE / YOUR */}
              <div className="flex flex-col items-center w-full">
                <div className="text-2xl sm:text-4xl lg:text-6xl font-extralight tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-white/50">
                  ELEVATE YOUR
                </div>
                {/* BRAND */}
                <div className="text-4xl sm:text-6xl lg:text-[120px] tracking-tight text-transparent bg-clip-text bg-linear-to-b from-[#E51C5C] to-[#E51C5C]/50">
                  BRAND
                </div>
              </div>
              {/* WITH + GHALYA */}
              <div className="flex flex-col items-center gap-2 mt-2">
                <div className="text-2xl sm:text-4xl lg:text-6xl font-extralight tracking-tight text-transparent bg-clip-text bg-linear-to-b from-white to-white/50">
                  WITH
                </div>
                <div className="text-3xl sm:text-5xl lg:text-[90px] tracking-tight text-transparent bg-clip-text bg-linear-to-b from-[#9C43AC] to-[#742E81]/50">
                  GHALYA LOYALTY
                </div>
              </div>
            </div>
            {/* BOTTOM LOGO */}
            <Image
              className="
                hidden md:block
                absolute
                bottom-2
                left-[33.2%]
                xl:left-[22%]
                xl:bottom-7
                lg:left-[23%]
                lg:bottom-6 
                -rotate-12
                w-12 md:w-16 lg:w-20 xl:w-24
                h-auto
              "
              alt="Ghalya logo"
              src={icon2}
            />
          </div>
          {/* DESCRIPTION */}
          <p className="mt-6 w-full max-w-125.25 text-center text-[31px] font-extralight text-[#F5F5F5]">
            Join Saudi Arabia's Premier Retail Loyalty Program
          </p>
          {/* BUTTON */}
          <Button
            type="button"
            className="cursor-pointer mt-6 mb-6 w-32 sm:w-40 lg:w-51.5 h-10 sm:h-12 lg:h-15 px-0 py-0 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <span className="text-xs sm:text-sm lg:text-base font-medium bg-[linear-gradient(98.15deg,#E51C5C_-39.42%,#38113F_113.67%)] bg-clip-text text-transparent">
              Become a Partner
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
