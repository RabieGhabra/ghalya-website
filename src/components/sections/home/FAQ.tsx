import { faqItems } from "../../data/ghalyaData";
import icon from "../../../assets/icons/faq-icon.png";
import CTA from "./CTA";
export default function FAQ({showBackground = true, showTitle = true, showCTA = true }) {
  return (
    <>
      <section className="relative overflow-hidden">
        {/* Background */}
          {showBackground && (
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(
                circle at 0% 0%,
                rgba(255, 125, 215, 0.55) 0%,
                rgba(255, 125, 215, 0.18) 22%,
                transparent 45%
              ),
              radial-gradient(
                circle at 100% 50%,
                rgba(255, 77, 166, 0.35) 0%,
                rgba(255, 77, 166, 0.15) 25%,
                transparent 50%
              ),
              radial-gradient(
                circle at 100% 100%,
                rgba(214, 142, 255, 0.25) 0%,
                transparent 40%
              ),
              linear-gradient(
                180deg,
                #fafafa 0%,
                #f5f5f5 100%
              )
        `,
      }}
    />
  )}
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-2 sm:px-4 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
          {/* Title */}
          {showTitle && (
            <h2 className="mb-10 sm:mb-14 lg:mb-20 bg-[linear-gradient(180deg,rgba(18,18,18,1)_0%,rgba(18,18,18,0.5)_100%)] bg-clip-text text-center font-['Lexend_Deca',Helvetica] text-3xl sm:text-5xl lg:text-[70px] font-medium leading-tight tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-3.5px] text-transparent [-webkit-text-fill-color:transparent]">
              Frequently Asked Questions
            </h2>
          )}
          {/* FAQ List */}
          <div className="w-full max-w-5xl space-y-4 sm:space-y-5 lg:space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-row-reverse items-center gap-3 sm:gap-4 rounded-2xl sm:rounded-[18px] lg:rounded-[20px] bg-[#EFEFEF] px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 w-full shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
              >
                <img
                  src={icon.src}
                  alt="faq icon"
                  className="cursor-pointer shrink-0 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8"
                />
                <h3 className="font-['Lexend_Deca',Helvetica] text-base sm:text-xl lg:text-[27px] font-normal leading-relaxed text-almost-black w-full">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
              {/* CTA */}
      {showCTA && <CTA />}
      </section>
    </>
  );
}