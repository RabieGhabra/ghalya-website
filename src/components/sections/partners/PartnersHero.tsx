import { ReactNode } from "react";

type PartnersHeroProps = {
  image: string;
  title: ReactNode;
  paragraphs: string[];
  maxWidth?: string;
  paragraphsMaxWidth?: string;
};
export default function PartnerHero({
  image,
  title,
  paragraphs,
  maxWidth = "max-w-178",
  paragraphsMaxWidth,
}: PartnersHeroProps) {
  return (
    <section className="container mx-auto px-4 py-10 lg:py-16">
      <div
        className="relative overflow-hidden rounded-3xl min-h-105 lg:min-h-158 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/0" />
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between h-full p-6 sm:p-8 lg:p-12 pt-14 lg:pt-20">
          <div className={`${maxWidth} text-white space-y-10`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl bg-[linear-gradient(182.32deg,#FFFFFF_28.99%,rgba(255,255,255,0.5)_85.87%)] bg-clip-text text-transparent font-bold leading-none">
              {title}
            </h1>
            <div className={`${paragraphsMaxWidth ?? ""} space-y-8`}>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-light text-xl sm:text-2xl leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
