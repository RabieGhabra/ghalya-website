import { benefitCards } from "../../data/ghalyaData";
import { Card, CardContent } from "../../ui/card";
import Image from "next/image";
export default function AboutSection() {
  return (
    <section
      className="relative w-full overflow-hidden border"
      style={{
        background: `
          radial-gradient(circle at left center,
            rgba(255,0,128,.25) 0%,
            rgba(255,0,128,.12) 15%,
            transparent 40%),
          radial-gradient(circle at right center,
            rgba(255,0,128,.25) 0%,
            rgba(255,0,128,.12) 15%,
            transparent 40%),
          radial-gradient(circle at top center,
            rgba(199,88,255,.12) 0%,
            transparent 45%),
          #f7f7f7
        `,
      }}
    >
      <div className="mx-auto w-full max-w-425">
        {/* ABOUT */}
        <section className="relative flex w-full flex-col items-center overflow-hidden px-4 sm:px-6 pt-16">
          <h2
            className="
              mt-6 sm:mt-10 lg:mt-20
              bg-[linear-gradient(180deg,#121212_0%,rgba(18,18,18,.5)_100%)]
              bg-clip-text
              text-center
              font-['Lexend_Deca',Helvetica]
              text-3xl
              sm:text-5xl
              lg:text-[70px]
              font-medium
              tracking-[-3.5px]
              text-transparent
            "
          >
            About Ghalya
          </h2>
          <p
            className="
              mt-8 sm:mt-12 lg:mt-15
              max-w-328.75
              text-center
              text-base
              sm:text-xl
              lg:text-[58px]
              font-normal
              leading-snug
            "
          >
            <span className="font-medium text-[#e51c5c]">Ghalya</span>
            <span className="text-[#606060]">
              {" "}
              is a next-generation loyalty program by BinDawood Group,
              designed to turn everyday shopping into meaningful{" "}
            </span>
            <span className="font-medium text-[#e51c5c]">rewards</span>
            <span className="text-[#606060]">
              . Customers earn points seamlessly across a growing network
              of partners, unlocking{" "}
            </span>
            <span className="font-medium text-[#e51c5c]">
              exclusive benefits
            </span>
            <span className="text-[#606060]">, </span>
            <span className="font-medium text-[#e51c5c]">
              experiences
            </span>
            <span className="text-[#606060]">, and </span>
            <span className="font-medium text-[#e51c5c]">
              personalized offers
            </span>
            <span className="text-[#606060]">.</span>
          </p>
        </section>
        {/* BENEFITS */}
        <section
          className="
            relative
            flex
            w-full
            flex-col
            items-center
            px-4
            pt-4
            sm:pt-6
            lg:pt-8
            pb-20
            sm:pb-32
            lg:pb-40
          "
        >
          <h2
            className="
              mt-12 sm:mt-16 lg:mt-20
              bg-[linear-gradient(180deg,#121212_0%,rgba(18,18,18,.5)_100%)]
              bg-clip-text
              text-center
              font-['Lexend_Deca',Helvetica]
              text-3xl
              sm:text-5xl
              lg:text-[70px]
              font-medium
              tracking-[-3.5px]
              text-transparent
            "
          >
            Key Benefits
          </h2>
          <div
            className="
              mt-10
              grid
              w-full
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-8
              justify-items-center
            "
          >
            {benefitCards.map((card, index) => (
              <Card
                key={`${card.titleTop}-${card.titleBottom}-${index}`}
                className={`relative overflow-hidden rounded-none border-0 bg-transparent p-0 shadow-none ${
                  index === 1 || index === 2
                    ? "lg:translate-y-20"
                    : ""
                }`}
                style={{
                  width: "100%",
                  maxWidth: "280px",
                  aspectRatio: "405 / 504",
                  backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Key_Benefits_Card_BG.png')`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <CardContent className="relative flex h-full flex-col justify-between p-6">
                  <div>
                    <div className="text-sm sm:text-xl lg:text-[28px] font-extralight text-white">
                      {card.titleTop}
                    </div>
                    <div
                      className={`${card.gradient}
                        bg-clip-text
                        text-transparent
                        text-xl
                        sm:text-3xl
                        lg:text-[42px]
                        tracking-tighter
                        whitespace-nowrap`}
                    >
                      {card.titleBottom}
                    </div>
                  </div>
                  <Image
                    src={card.icon}
                    alt={card.titleBottom}
                    width={120}
                    height={120}
                    className="w-16 sm:w-20 lg:w-24 h-auto object-contain"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}