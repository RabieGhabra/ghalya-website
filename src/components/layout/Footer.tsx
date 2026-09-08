"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerColumns } from "../data/ghalyaData";
import logo from "../../assets/icons/ghalya-logo.png";
import socialIcon1 from "../../assets/icons/Social Icons.png";
import socialIcon2 from "../../assets/icons/Social Icons (1).png";
import socialIcon3 from "../../assets/icons/Social Icons (2).png";

export default function Footer() {
  const pathname = usePathname();

  const handleSamePageClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer
      className="relative w-full bg-cover bg-center px-6 sm:px-8 md:px-12 lg:px-20 py-16 md:py-20 lg:pt-31.5 lg:pb-30 flex justify-center"
      style={{
        backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/footer-bg.png')`,
      }}
    >
      <div className="w-full max-w-425 grid grid-cols-1 xl:grid-cols-[400px_1fr] gap-12 xl:gap-6">
        {/* Left Side */}
        <section className="text-center lg:text-left">
          <img
            src={logo.src}
            alt="Ghalya Logo"
            className="w-20 sm:w-28 lg:w-32.5 h-auto object-contain mx-auto lg:mx-0"
          />
          <p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-[27px] font-extralight leading-relaxed text-white">
            © 2026 Ghalya Loyalty Program.
            <br />
            All rights reserved.
          </p>
          <div className="mt-8 md:mt-10 lg:mt-12 flex items-center justify-center lg:justify-start gap-4 md:gap-6">
            <img
              className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              alt="Social Icon 1"
              src={socialIcon1.src}
            />
            <img
              className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              alt="Social Icon 2"
              src={socialIcon2.src}
            />
            <img
              className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              alt="Social Icon 3"
              src={socialIcon3.src}
            />
          </div>
        </section>
        {/* Right Side */}
        <nav
          aria-label="Footer navigation"
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-8
            md:gap-10
            lg:gap-16
            xl:gap-24
          "
        >
          {footerColumns.map((column) => (
            <section key={column.title} className="text-center sm:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[27px] text-white whitespace-nowrap">
                {column.title}
              </h3>
              <ul className="mt-6 md:mt-8 lg:mt-10 space-y-4 md:space-y-6 lg:space-y-8">
                {column.items.map((item) => {
                  const isSamePage = item.href === pathname;
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        isSamePage ? (
                          <button
                            onClick={handleSamePageClick}
                            className="
                              block
                              w-full
                              text-center
                              sm:text-left
                              text-sm
                              sm:text-base
                              lg:text-[18px]
                              font-extralight
                              text-white
                              transition-opacity
                              hover:opacity-80
                            "
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            className="
                              block
                              w-full
                              text-center
                              sm:text-left
                              text-sm
                              sm:text-base
                              lg:text-[18px]
                              font-extralight
                              text-white
                              transition-opacity
                              hover:opacity-80
                            "
                          >
                            {item.label}
                          </Link>
                        )
                      ) : (
                        <span
                          className="
                            block
                            w-full
                            text-center
                            sm:text-left
                            text-sm
                            sm:text-base
                            lg:text-[18px]
                            font-extralight
                            text-white
                          "
                        >
                          {item.label}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </nav>
      </div>
    </footer>
  );
}
