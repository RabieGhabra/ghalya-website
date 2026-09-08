import Image from "next/image";
import LoyaltyCard from "../../../assets/images/Group-2147226481.png";

export default function Intro() {
  return (
    <section className="container relative mx-auto px-4 py-10 lg:py-16 pb-28 sm:pb-40 lg:pb-64">
      {/* Wrapper */}
      <div className="relative">
        {/* Hero Card */}
        <div
          className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat min-h-120 lg:min-h-130"
          style={{
            backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group-2147226537.png')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 lg:bg-black/10" />
          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between h-full p-6 sm:p-8 lg:p-12 pt-10 lg:pt-12">
            <div className="w-full lg:w-[80%] xl:w-[70%] text-white space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-[linear-gradient(182.32deg,#FFFFFF_28.99%,rgba(255,255,255,0.5)_85.87%)] bg-clip-text text-transparent font-bold leading-none">
                Elevate Every Experience
                <br />
                with Ghalya
              </h1>
              <div className="space-y-4 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-[85%] lg:max-w-[70%] xl:max-w-[58%]">
                <p>
                  The Ghalya Loyalty Program is proud to partner with leading
                  names across various sectors, offering our members an
                  extraordinary array of benefits that enrich every aspect of
                  their lives.
                </p>
                <p>
                  From seamless shopping experiences at premier supermarkets to
                  unparalleled global payment flexibility, our partners play a
                  pivotal role in bringing you closer to the rewards you truly
                  deserve. Explore the endless possibilities and make every
                  transaction a rewarding journey with our esteemed partners.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Floating Loyalty Card */}
        <div className="absolute z-50 right-4 -bottom-25 max-[460px]:-bottom-35 sm:right-10 sm:-bottom-37.5 lg:right-12 lg:-bottom-55 xl:right-20">
          <Image
            src={LoyaltyCard}
            alt="Ghalya Loyalty Card"
            width={380}
            height={240}
            priority
            className="w-55 sm:w-70 md:w-[320px] lg:w-90 xl:w-120 h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
