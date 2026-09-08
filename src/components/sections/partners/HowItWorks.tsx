import Image from "next/image";
import type { ReactNode } from "react";
import PointsIcon from "../../../assets/icons/Group 2147226558.png";
import DanubeIcon from "../../../assets/icons/Group 2147226559.png";

export default function HowItWorksSection({
  children,
  withTopMargin = false,
}: {
  children?: ReactNode;
  withTopMargin?: boolean;
}) {
  return (
    <section className="w-full max-w-330 mx-auto px-6 pt-0 pb-0 font-sans selection:bg-purple-200 max-[1479px]:pb-18">
      <div className="grid grid-cols-1 min-[1480px]:grid-cols-[3fr_7fr] gap-0 md:gap-8 items-center justify-items-center">
        <div className="relative order-1 flex justify-center items-center w-full max-w-87.5 sm:max-w-112.5 md:max-w-150 min-[1480px]:max-w-none mx-auto">
          <div
            className="
              absolute z-20
              w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16
              left-2 sm:left-6 md:left-12
              top-10 sm:top-24 md:top-40
            "
          >
            <img
              src={PointsIcon.src}
              alt="Points Icon"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            className="
              absolute z-20
              w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18
              right-5
              top-16 sm:top-28 md:top-40
            "
          >
            <img
              src={DanubeIcon.src}
              alt="Danube Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative w-full rounded-4xl flex justify-center items-end">
            <Image
              src={`${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group 77045.png`}
              alt="Extra Background 1"
              width={375}
              height={375}
              className="
                absolute opacity-80 pointer-events-none select-none
                top-12 left-18
                max-[379px]:left-5
                sm:top-14.5 sm:left-25
                md:top-26.25 md:left-37.5
                lg:top-20 lg:left-20
                w-50 max-[319px]:w-37.5 sm:w-60 md:w-[320px] lg:w-93.75
              "
              style={{ height: "auto" }}
            />
            <div
              className="
                absolute pointer-events-none select-none
                top-26 sm:top-40 md:top-64
                -left-6 sm:-left-12 md:-left-20
                scale-75 sm:scale-90 md:scale-100
              "
            >
              <Image
                src={`${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group-3147226548.png`}
                alt="Ghalya Background Icon"
                width={620}
                height={378}
              />
            </div>
            <div
              className="
                relative z-0
                w-65 sm:w-95 md:w-130
                max-[379px]:w-50
                h-90 sm:h-125 md:h-162.5
                max-[379px]:h-70
                -top-2
                sm:top-4 md:top-16
                left-15 sm:left-25 md:left-31
                max-[379px]:left-5
              "
            >
              <Image
                src={`${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group-2147226551(1).png`}
                alt="Ghalya App Mockup"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div
          className={`max-w-162.5 order-2 flex flex-col justify-center space-y-6 text-left w-full min-[1480px]:text-left ${
            withTopMargin ? "min-[1480px]:mt-10" : ""
          }`}
        >
          <h2 className="font-lexend font-medium text-[50px] sm:text-[70px] leading-13.75 sm:leading-15 tracking-tighter bg-[linear-gradient(176.72deg,#121212_0%,#666666_100%)] bg-clip-text text-transparent">
            How It Works
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}