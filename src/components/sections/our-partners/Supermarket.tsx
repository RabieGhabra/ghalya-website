"use client";
import { useRouter } from "next/navigation";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import DanubeLogo from "../../../assets/icons/Frame-(18).png";
import BinDawoodLogo from "../../../assets/icons/Frame-(20).png";

export default function Supermarket() {
  const router = useRouter();
  return (
    <>
      {/* Title Section */}
      <div className="px-4">
        <h2 className="mb-10 sm:mb-14 lg:mb-20 text-center bg-[linear-gradient(180deg,rgba(18,18,18,1)_0%,rgba(18,18,18,0.5)_100%)] bg-clip-text font-['Lexend_Deca',Helvetica] text-3xl sm:text-5xl lg:text-[70px] font-normal leading-tight tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-3.5px] text-transparent [-webkit-text-fill-color:transparent]">
          Shop and Earn with
          <br />
          Our Supermarket Partners
        </h2>
      </div>
      <section className="min-h-331.5  flex flex-col md:flex-row">
        {/* Danube */}
        <div
          className="relative w-full md:w-1/2  bg-cover bg-center"
          style={{
            backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group-2147226539.png')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 "></div>
          {/* Content */}
          <div className="min-h-246.5 relative z-10 h-full flex flex-col justify-end p-10 text-[#FFFFFF] gap-6">
            <Image src={DanubeLogo} alt="" />
            <h2 className="max-w-162.5  text-left font-['Lexend_Deca',Helvetica] text-3xl sm:text-5xl lg:text-[64px] font-light leading-15.75 tracking-tighter">
              <span>Danube Supermarkets:</span>
              <br />
              <span className="text-gray-300">
                Rewarding Your Grocery Shopping
              </span>
            </h2>
            <p className="font-['Lexend_Deca',Helvetica] font-light text-[26px] leading-8.25 tracking-normal max-w-197.75 opacity-80 mb-6">
              Danube Supermarkets transforms your grocery shopping into an
              opportunity to earn Ghalya points. Experience the joy of premium
              quality products while accumulating rewards that open the door to
              exclusive benefits and experiences. Discover how Danube
              Supermarkets makes every purchase more rewarding.
            </p>
            {/* BUTTON */}
            <Button
              type="button"
              onClick={() => router.push("/Partners/danube")}
              className="cursor-pointer mt-6 mb-6 w-35 sm:w-42.5 lg:w-51.5 h-10.5 sm:h-12.5 lg:h-15 rounded-full bg-white shadow-lg flex items-center justify-center"
            >
              <span className="text-xs sm:text-sm lg:text-base font-medium bg-[linear-gradient(98.15deg,#E51C5C_-39.42%,#38113F_113.67%)] bg-clip-text text-transparent">
                Learn More
              </span>
            </Button>
          </div>
        </div>
        {/* Bin Dawood */}
        <div
          className="relative w-full md:w-1/2 bg-cover"
          style={{
            backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Rectangle-139368.png')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 "></div>
          {/* Content */}
          <div className="min-h-246.5 relative z-10 h-full flex flex-col justify-end p-10 text-[#FFFFFF] gap-6">
            <Image src={BinDawoodLogo} alt="" />
            <h2 className="max-w-187.5  text-left font-['Lexend_Deca',Helvetica] text-3xl sm:text-5xl lg:text-[64px] font-light leading-15.75 tracking-tighter">
              <span>BinDawood Supermarkets:</span>
              <br />
              <span className="text-gray-300">
                Where Every Purchase Rewards
              </span>
            </h2>
            <p className="font-['Lexend_Deca',Helvetica] font-light text-[26px] leading-8.25 tracking-normal max-w-197.75 opacity-80 mb-6">
              With BinDawood Supermarkets as a part of the Ghalya Loyalty
              Program, every shopping trip becomes an avenue to earn Ghalya
              points. Unlock access to a wide range of exclusive rewards and
              experiences curated just for you. Learn more about the rewarding
              shopping experience at BinDawood Supermarkets.
            </p>
            {/* BUTTON */}
            <Button
              type="button"
              onClick={() => router.push("/Partners/bin-dawood")}
              className="cursor-pointer mt-6 mb-6 w-35 sm:w-42.5 lg:w-51.5 h-10.5 sm:h-12.5 lg:h-15 rounded-full bg-white shadow-lg flex items-center justify-center"
            >
              <span className="text-xs sm:text-sm lg:text-base font-medium bg-[linear-gradient(98.15deg,#E51C5C_-39.42%,#38113F_113.67%)] bg-clip-text text-transparent">
                Learn More
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
