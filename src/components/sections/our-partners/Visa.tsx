"use client";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import VisaLogo from "../../../assets/icons/Frame (22).png";

export default function Visa() {
  const router = useRouter();
  return (
    <section className="relative min-h-221.25  text-white overflow-hidden">
      {/* Background */}
      <Image
        src={`${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group-2147226541.png`}
        alt="background"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0" />
      {/* Content */}
      <div className="relative z-10 flex items-end justify-start min-h-221.25 px-6 md:px-16">
        <div className=" space-y-6 pb-10 md:pb-20">
          <Image src={VisaLogo} alt="" className="mt-6 sm:mt-0" />
          <h2 className=" text-left font-['Lexend_Deca',Helvetica] text-3xl sm:text-5xl lg:text-[64px] font-light leading-15.75 tracking-tighter">
            Visa: Experience <br />
            Unmatched Rewards with <br />
            <span className="text-gray-300">Every Purchase</span>
          </h2>
          <p className="max-w-350 font-lexend text-[26px] font-light leading-8.25 tracking-normal ">
            Visa, a global leader in payment solutions, is delighted to partner
            with the Ghalya Loyalty Program, offering cardholders a unique
            opportunity to earn points on their purchases worldwide. This
            partnership ensures that your Visa transactions not only bring
            convenience and security but also rewarding Ghalya points. Find out
            how Visa can enhance your earning potential.
          </p>
          {/* BUTTON */}
          <Button
            type="button"
            onClick={() => router.push("/Partners/visa")}
            className="cursor-pointer mt-6 mb-6 w-35 sm:w-42.5 lg:w-51.5 h-10.5 sm:h-12.5 lg:h-15 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <span className="text-xs sm:text-sm lg:text-base font-medium bg-[linear-gradient(98.15deg,#E51C5C_-39.42%,#38113F_113.67%)] bg-clip-text text-transparent">
              Learn More
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
