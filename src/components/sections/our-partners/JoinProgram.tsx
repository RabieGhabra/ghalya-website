"use client";
import { useRouter } from "next/navigation";

export default function JoinProgram() {
  const router = useRouter();
  return (
    <section className="container relative mx-auto px-4 py-10 lg:py-20">
      <div
        className="
          relative
          mx-auto
          max-w-420
          overflow-hidden
          rounded-3xl
          bg-cover
          bg-center
          min-h-247
          flex
          justify-center
        "
        style={{
          backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group-2147226542.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-262.5 text-center text-white px-4 pt-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-[linear-gradient(182.32deg,#FFFFFF_28.99%,rgba(255,255,255,0.5)_85.87%)] bg-clip-text text-transparent font-medium leading-tight mb-8">
            Join the Ghalya
            <br />
            Loyalty Program
          </h2>
          <p className="text-base md:text-xl text-gray-200 leading-relaxed mb-6">
            Embrace a world where every transaction is not just an exchange but
            an opportunity to earn and enjoy unparalleled rewards. From your
            daily essentials shopping to global spending, the Ghalya Loyalty
            Program and our partners ensure that every moment is rewarding.
          </p>
          <p className="text-base md:text-xl text-gray-200 leading-relaxed mb-10">
            Contact us to learn more about the Ghalya Loyalty Program and how
            you can start enjoying the benefits today. Join us in this rewarding
            journey and let every experience bring you closer to the rewards you
            love.
          </p>

          <button
            onClick={() => router.push("/contact-us")}
            className="cursor-pointer bg-white text-black px-12 py-3 rounded-full font-medium"
          >
            <span className="text-xs sm:text-sm lg:text-base font-medium bg-[linear-gradient(98.15deg,#E51C5C_-39.42%,#38113F_113.67%)] bg-clip-text text-transparent">
              Contact Us
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
