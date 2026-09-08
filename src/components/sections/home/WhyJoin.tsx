import { reasons } from "../../data/ghalyaData";
export default function WhyJoin() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center py-16 sm:py-24 lg:py-32"
      style={{
        backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/why-join-bg.png')`,
      }}
    >
      <div className="mx-auto max-w-400 px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <h2 className="text-center font-['Lexend_Deca',Helvetica] text-3xl sm:text-5xl lg:text-[74px] font-normal tracking-[-3.7px] leading-tight">
          <span className="[text-shadow:0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(255,255,255,1)_20%,rgba(255,255,255,0.5)_100%)] bg-clip-text text-transparent [-webkit-text-fill-color:transparent]">
            Why Join Ghalya
          </span>
          <br />
          <span className="text-gray-400">Coalition Loyalty Program?</span>
        </h2>
        {/* GRID */}
        <div className="relative mt-6 sm:mt-8 lg:mt-24 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16 text-white">
          {reasons.map((item) => (
            <article
              key={item.number}
              className="relative isolate min-w-0 overflow-visible"
            >
              {/* NUMBER (masked so it fades under text) */}
              <div
                className="
                  absolute
                  top-2 sm:-top-4 md:-top-4 lg:-top-12
                  -left-2 sm:-left-3 md:-left-4 lg:-left-4
                  z-0
                  pointer-events-none
                  opacity-80
                  bg-[linear-gradient(171deg,rgba(229,28,92,1)_0%,rgba(229,28,92,0)_100%)]
                  bg-clip-text
                  text-transparent
                  font-['Lexend_Deca',Helvetica]
                  text-6xl sm:text-8xl lg:text-[164px]
                  mask-[linear-gradient(to_bottom,black_55%,transparent_100%)]
                  [webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent_100%)]
                "
              >
                {item.number}
              </div>

              {/* Heading */}
              <h3
                className="
                relative z-10 mt-10
                whitespace-pre-line
                [text-shadow:0px_4px_4px_#00000040]
                bg-[linear-gradient(180deg,rgba(255,255,255,1)_20%,rgba(255,255,255,0.5)_100%)]
                bg-clip-text text-transparent
                font-['Lexend_Deca',Helvetica]
                font-light
                text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[48px]
                "
              >
                {item.title}
              </h3>
              {/* Description */}
              <p
                className="
                  relative z-10 mt-6
                  w-full max-w-77.5
                  wrap-break-word leading-relaxed
                  font-['Lexend_Deca',Helvetica]
                  text-sm sm:text-base lg:text-[26px]
                  font-light
                  text-crisp-white
                "
              >
                {item.description}
              </p>
            </article>
          ))}
          {/* Lines */}
          <div className="pointer-events-none absolute left-[24%] top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="h-270 w-0.5 bg-white/60" />
          </div>
          <div className="pointer-events-none absolute left-[49.5%] top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <div className="h-270 w-0.5 bg-white/60" />
          </div>
          <div className="pointer-events-none absolute left-[75%] top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="h-270 w-0.5 bg-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
}
