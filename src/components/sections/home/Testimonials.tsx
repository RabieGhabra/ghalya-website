import { testimonials } from "../../data/ghalyaData";
import { Card, CardContent } from "../../ui/card";
import { useRef } from "react";
import Image from "next/image";
import ellipse2 from "../../../assets/images/7129100dff7504ad218707f16e2222a21acf1297.jpg";
import ellipse1 from "../../../assets/images/cbe46ce491a0e7df4e16ba05228ec32e3f0aa8c1.jpg";
import ellipse3 from "../../../assets/images/e98fc21113072334ebc1b7d4afe4ecc0f4a05d4a.jpg";
import arrowLeft from "../../../assets/icons/fi_1549454.png";
import arrowRight from "../../../assets/icons/fi_1549454 (1).png";
import badgeIcon from "../../../assets/icons/Vector (4).png";
export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const getScrollAmount = () => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.querySelector(".testimonial-card");
      if (firstCard) {
        return firstCard.clientWidth + 32;
      }
    }
    return 340;
  };
  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  };
  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  };
  return (
    <section
      className="relative w-full overflow-hidden pt-12 md:pt-24 pb-10 md:pb-40"
      style={{
        background: ` radial-gradient(circle at 8% 35%, rgba(255, 112, 196, 0.45) 0%, transparent 28%), radial-gradient(circle at 92% 18%, rgba(255, 112, 196, 0.45) 0%, transparent 28%), radial-gradient(circle at 50% 0%, rgba(205, 143, 255, 0.25) 0%, transparent 35%), linear-gradient(180deg, #F8F5F7 0%, #FFFFFF 100%) `,
      }}
    >
      {" "}
      {/* Background Blur Effects */}{" "}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {" "}
        <div className="absolute -left-45 top-10 w-125 h-125 rounded-full bg-[#FF73C9]/40 blur-[160px]" />{" "}
        <div className="absolute -right-45 top-0 w-125 h-125 rounded-full bg-[#FF73C9]/40 blur-[160px]" />{" "}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-175 h-112.5 rounded-full bg-[#D69BFF]/20 blur-[180px]" />{" "}
      </div>{" "}
      {/* Title */}{" "}
      <h2 className=" bg-[linear-gradient(180deg,rgba(18,18,18,1)_0%,rgba(18,18,18,0.5)_100%)] bg-clip-text text-center font-['Lexend_Deca'] text-4xl sm:text-5xl md:text-[70px] font-normal leading-tight md:leading-[1.2] tracking-tight md:tracking-[-3.5px] text-transparent [-webkit-text-fill-color:transparent] ">
        {" "}
        Program Member Testimonials{" "}
      </h2>{" "}
      {/* Main Container */}{" "}
      <div className=" mx-auto w-full max-w-520 sm:pl-20 mt-12 md:mt-28 flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20 ">
        {" "}
        {/* Left side */}{" "}
        <aside className=" relative w-full max-w-95 lg:w-130 lg:shrink-0 h-80 md:h-90 lg:h-auto md:pt-10 lg:pt-90 flex flex-col items-center justify-end ">
          {" "}
          {/* Avatar circles container */}{" "}
          <div className=" absolute top-10 sm:top-2 md:top-0 lg:top-20 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-full max-w-57.5 sm:max-w-[320px] md:max-w-100 lg:max-w-112.5 h-45 sm:h-60 md:h-75 lg:h-auto ">
            {" "}
            {/* Avatar 1 */}{" "}
            <div className=" absolute left-[24%] sm:left-[28%] md:left-22.5 lg:left-27.5 top-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-4 lg:border-[7px] border-white overflow-hidden shadow-md ">
              {" "}
              <Image src={ellipse1} alt="" fill className="object-cover" />{" "}
            </div>{" "}
            {/* Avatar 2 */}{" "}
            <div className=" absolute left-0 top-10 sm:top-12 md:top-14 lg:top-16 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-4 lg:border-[7px] border-white overflow-hidden shadow-md ">
              {" "}
              <Image src={ellipse2} alt="" fill className="object-cover" />{" "}
            </div>{" "}
            {/* Avatar 3 */}{" "}
            <div className=" absolute left-[30%] sm:left-[32%] md:left-23.75 lg:left-27.25 top-18 sm:top-24 md:top-28 lg:top-30.25 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-4 lg:border-[7px] border-white overflow-hidden shadow-md ">
              {" "}
              <Image src={ellipse3} alt="" fill className="object-cover" />{" "}
            </div>{" "}
          </div>{" "}
          {/* Review Counter */}{" "}
          <div className=" mt-auto lg:mt-20 text-center font-['Lexend_Deca'] text-3xl lg:text-[54px] font-light leading-tight lg:leading-[1.2] tracking-tight lg:tracking-[-2.7px] text-transparent bg-[linear-gradient(180deg,#9C43AC_0%,rgba(116,46,129,0.5)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] ">
            {" "}
            100+ <br /> Verified Reviews{" "}
          </div>{" "}
        </aside>{" "}
        {/* Testimonials Slider */}{" "}
        <div
          ref={sliderRef}
          className="w-full flex flex-col md:flex-row gap-10 md:gap-8 overflow-visible md:overflow-x-auto overflow-y-visible scroll-smooth no-scrollbar pt-12 pb-6 px-4 lg:px-0"
        >
          {" "}
          {testimonials.map((item, index) => (
            <Card
              key={`${item.author}-${index}`}
              className=" testimonial-card relative w-full sm:w-125 md:w-172 min-h-112.5 md:min-h-159.5 shrink-0 border-0 bg-transparent shadow-none "
            >
              {" "}
              {/* Badge - only first card */}{" "}
              {index === 0 && (
                <div className=" absolute -top-6 md:-top-10 right-4 md:right-10 w-24 md:w-31.5 h-12 md:h-19.5 bg-white rounded-[60px] flex items-center justify-center gap-1 md:gap-2 z-20 shadow-md ">
                  {" "}
                  <Image
                    src={badgeIcon}
                    alt="icon"
                    className=" w-6 h-9 sm:w-7 sm:h-11 md:w-9 md:h-14 lg:w-10 lg:h-16 "
                  />{" "}
                  <Image
                    src={badgeIcon}
                    alt="icon"
                    className=" w-6 h-9 sm:w-7 sm:h-11 md:w-9 md:h-14 lg:w-10 lg:h-16 "
                  />{" "}
                </div>
              )}{" "}
              <CardContent className="relative h-full p-0 flex flex-col">
                {" "}
                {/* Frame background */}{" "}
                <div className="absolute inset-0 z-0">
                  {" "}
                  <Image
                    src={`${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Subtract.png`}
                    alt=""
                    fill
                    className="object-stretch lg:object-contain"
                    priority={index === 0}
                  />{" "}
                </div>{" "}
                {/* Content */}{" "}
                <div className=" relative z-10 px-6 md:px-12 pt-8 md:pt-16 pb-6 md:pb-8 flex flex-col grow justify-between min-h-112.5 md:min-h-159.5 ">
                  {" "}
                  {/* Quote */}{" "}
                  <p className=" font-['Lexend_Deca'] text-lg sm:text-xl md:text-[27px] font-light text-almost-black leading-relaxed ">
                    {" "}
                    {item.quote}{" "}
                  </p>{" "}
                  {/* Author */}{" "}
                  <div className=" mt-20 md:mt-auto whitespace-pre-line bg-[linear-gradient(180deg,#E51C5C_0%,rgba(229,28,92,0.5)_100%)] bg-clip-text text-3xl sm:text-4xl md:text-[54px] font-light leading-tight md:leading-[1.3] tracking-tight md:tracking-[-2.7px] text-transparent [-webkit-text-fill-color:transparent] ">
                    {" "}
                    {item.author}{" "}
                  </div>{" "}
                </div>{" "}
              </CardContent>{" "}
            </Card>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* Arrows Controls */}{" "}
      <div className="absolute bottom-6 right-4 sm:right-8 lg:bottom-10 lg:right-30 flex gap-6 max-[260px]:gap-2 z-30 min-[2020px]:hidden min-[770px]:flex max-[769px]:hidden">
        {" "}
        {/* Left Arrow */}{" "}
        <button
          onClick={scrollLeft}
          className=" cursor-pointer p-3 max-[260px]:p-1 lg:p-4 hover:scale-110 transition-transform bg-transparent shadow-none shrink-0 "
        >
          {" "}
          <Image
            src={arrowLeft}
            alt="left arrow"
            className=" w-10 h-10 max-[260px]:w-7 max-[260px]:h-7 lg:w-14 lg:h-14 "
          />{" "}
        </button>{" "}
        {/* Right Arrow */}{" "}
        <button
          onClick={scrollRight}
          className=" cursor-pointer p-3 max-[260px]:p-1 lg:p-4 hover:scale-110 transition-transform bg-transparent shadow-none shrink-0 "
        >
          {" "}
          <Image
            src={arrowRight}
            alt="right arrow"
            className=" w-10 h-10 max-[260px]:w-7 max-[260px]:h-7 lg:w-14 lg:h-14 "
          />{" "}
        </button>{" "}
      </div>{" "}
    </section>
  );
}
