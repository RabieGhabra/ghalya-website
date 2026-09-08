import Image, { StaticImageData } from "next/image";

type BenefitCard = {
  icon: StaticImageData;
  title: string;
  highlightedText?: string;
  description: string;
};
interface BenefitsSectionProps {
  heading: string;
  cards: BenefitCard[];
}
export default function BenefitsSection({
  heading,
  cards,
}: BenefitsSectionProps) {
  return (
    <section className="pt-0 pb-14">
      <div className="mx-auto max-w-400 px-6">
        <h2 className="mb-20 text-center font-['Lexend_Deca'] text-[70px] font-normal leading-18.25 tracking-tighter bg-[linear-gradient(176.72deg,#121212_0%,#666666_100%)] bg-clip-text text-transparent">
          {heading}
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative min-h-142.5 overflow-hidden rounded-[20px] px-3 py-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ff3c8d_0%,#d91f72_30%,#56124e_70%,#090909_100%)]" />
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pink-500/30 blur-3xl" />
              <div className="relative z-10 flex h-full flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-30 flex h-20 w-20 items-center justify-center rounded-full">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={102}
                    height={102}
                  />
                </div>
                <h3 className="mb-4 text-[41px] leading-[1.05] font-extralight text-white">
                  {card.title}
                  {card.highlightedText && (
                    <>
                      <br />
                      <span className="text-[#ff2b87] font-light tracking-tighter">
                        {card.highlightedText}
                      </span>
                    </>
                  )}
                </h3>
                <p className="max-w-[320px] font-['Lexend_Deca'] font-light text-[26px] leading-8.25 text-white/90 tracking-tighter">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
