import { aboutCards } from "../../../components/data/ghalyaData";
export default function AboutCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 lg:mt-14 justify-items-center">
      {aboutCards.map((card) => (
        <div
          key={card.title}
          className="relative w-full max-w-136.75 h-92.75 rounded-3xl overflow-hidden group cursor-pointer"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `url(${card.bg})`,
            }}
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="relative z-10 h-full p-6 flex items-start">
            <h3 className="bg-[linear-gradient(182.32deg,#FFFFFF_28.99%,rgba(255,255,255,0.5)_85.87%)] bg-clip-text text-transparent max-w-30 sm:max-w-32.5 lg:max-w-60 font-lexend  text-[32px] lg:text-[64px] leading-[1.1] lg:leading-15.75 tracking-tighter">
              {card.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}
