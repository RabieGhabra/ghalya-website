import Header from "../layout/Header";

export default function HeaderBanner({ title }: { title: string }) {
  return (
    <div
      className="relative w-full h-80 sm:h-95 md:h-105 lg:h-114.5 bg-cover bg-center"
      style={{
        backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/group-2147226549.png')`,
      }}
    >
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>
      <div className="h-full flex items-center justify-center px-4 pt-24">
        <h1 className="bg-[linear-gradient(182.32deg,#FFFFFF_28.99%,rgba(255,255,255,0.5)_85.87%)] bg-clip-text text-transparent text-2xl sm:text-4xl md:text-6xl lg:text-[84px] tracking-wide text-center">
          {title}
        </h1>
      </div>
    </div>
  );
}
