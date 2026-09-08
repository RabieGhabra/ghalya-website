import img1 from "../../../assets/images/Mask group.png";
import img2 from "../../../assets/images/Mask group (1).png";
import arrowUp from "../../../assets/icons/fi_1549455  (1).png";
import arrowDown from "../../../assets/icons/fi_1549455.png";
export default function EarnRedeem() {
  return (
    <section
      className="relative w-full py-7 md:py-9 lg:py-10 bg-cover bg-center text-white px-4 flex items-center justify-center overflow-visible"
      style={{
        backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/EarnRedeem-bg.png')`,
      }}
    >
      <div className="w-full mx-auto max-w-480 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start overflow-visible">
        <div className="lg:col-span-4 flex flex-col gap-6 justify-center items-center lg:items-start relative overflow-visible">
          <div
            className="w-full max-w-101.25 overflow-hidden shadow-2xl relative -translate-y-7 md:-translate-y-9 lg:-translate-y-10
            rounded-tl-nonerrounded-tr-nonerounded-bl-[30px] rounded-br-[30px]"
          >
            <img
              src={img1.src}
              alt="Ghalya Card"
              className="w-full object-cover"
            />
          </div>
          <div
            className="w-full max-w-101.25 overflow-hidden shadow-2xl relative  md:translate-x-10 translate-y-7 md:translate-y-9 lg:translate-y-10
            rounded-tl-[30px] rounded-tr-[30px] rounded-bl-none rounded-br-none"
          >
            <img
              src={img2.src}
              alt="Enjoying Ghalya"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-5 mt-5 lg:mt-10">
          <div className="font-['Lexend_Deca',Helvetica]">
            <h2 className="text-4xl md:text-[74px] font-normal leading-tight tracking-tight">
              <span className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_20%,rgba(255,255,255,0.5)_100%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
                Earn & Redeem & Enjoy:
              </span>
              <span className="block text-gray-400 font-normal">
                Ghalya Loyalty Program
              </span>
            </h2>
          </div>
          <div className="flex flex-col w-full max-w-300.5 font-['Lexend_Deca',Helvetica] mt-4 lg:mt-8 lg:ml-4 pr-6 lg:pr-12">
            <div className="pb-8">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-3xl md:text-[54px] font-light text-[#E51C5C]">
                  Earn Points
                </h3>
                <img
                  src={arrowUp.src}
                  alt="Collapse"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-4 text-gray-300 max-w-full text-base sm:text-lg md:text-xl lg:text-[27px] font-light leading-relaxed">
                <p>
                  More Rewards, More Value: Earn points every time you use your
                  Ghalya Visa card, and enjoy even greater benefits when
                  shopping at BinDawood and Danube.
                </p>
                <p>
                  Maximize Your Rewards: Earn points on every purchase and
                  unlock extra value when you shop at BinDawood and Danube.
                </p>
                <p>
                  Maximize Your Rewards: Earn points on every purchase and
                  unlock extra value when you shop at BinDawood and Danube.
                </p>
              </div>
              <div className="w-full h-px bg-white/20 mt-8"></div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-3xl md:text-[54px] font-light text-[#E51C5C]/80 hover:text-[#E51C5C] transition-colors cursor-pointer">
                  Redeem
                </h3>
                <img
                  src={arrowDown.src}
                  alt="Expand"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 cursor-pointer"
                />
              </div>
              <div className="w-full h-px bg-white/20 mt-8"></div>
            </div>
            <div className="pt-8">
              <div className="flex justify-between items-center">
                <h3 className="text-3xl md:text-[54px] font-light text-[#E51C5C]/80 hover:text-[#E51C5C] transition-colors cursor-pointer">
                  Enjoy
                </h3>
                <img
                  src={arrowDown.src}
                  alt="Expand"
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 cursor-pointer"
                />
              </div>
              <div className="w-full h-px bg-white/20 mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
