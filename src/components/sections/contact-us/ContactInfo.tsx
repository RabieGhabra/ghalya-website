import Image from "next/image";
import phoneIcon from "../../../assets/icons/Group-2147226522.png";
import emailIcon from "../../../assets/icons/Group-2147226494.png";
import locationIcon from "../../../assets/icons/Group-2147226495.png";
import xIcon from "../../../assets/icons/Social Icons.png";
import instagramIcon from "../../../assets/icons/Social Icons (1).png";
import facebookIcon from "../../../assets/icons/Social Icons (2).png";

export default function ContactInfo() {
  return (
    <div
      className="relative overflow-hidden rounded-3xl min-h-227 bg-cover bg-center"
      style={{
        backgroundImage: `url('${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group-2147226548.png')`,
      }}
    >
      {" "}
      <div className="relative z-10 p-8 mt-10 text-white h-full">
        <h2 className="text-5xl font-semibold bg-[linear-gradient(182.32deg,#FFFFFF_28.99%,rgba(255,255,255,0.5)_85.87%)] bg-clip-text text-transparent tracking-wide mb-10">
          Get in Touch
        </h2>
        <p className="mb-10 text-[26px] leading-9 font-light">
          Have questions, comments, or suggestions? Interested in partnership
          opportunities? Simply fill in the form and we'll be in touch shortly.
        </p>
        <div className="space-y-8">
          <div className="flex gap-4 items-center">
            <Image src={phoneIcon} alt="" />
            <div>
              <p className="text-2xl bg-[linear-gradient(182.32deg,#FFFFFF_28.99%,rgba(255,255,255,0.5)_85.87%)] bg-clip-text text-transparent tracking-wide">
                Phone
              </p>
              <p className="text-[26px] leading-9 font-light">
                +966 56 568 5404
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={emailIcon} alt="" />
            <div>
              <p className="text-2xl bg-[linear-gradient(182.32deg,#FFFFFF_28.99%,rgba(255,255,255,0.5)_85.87%)] bg-clip-text text-transparent tracking-wide">
                Email
              </p>
              <p className="text-[26px] leading-9 font-light">
                <span className="whitespace-nowrap">Ghalialoyalty</span>{" "}
                <span className="wrap-break-word">@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={locationIcon} alt="" />
            <div>
              <p className="text-2xl bg-[linear-gradient(182.32deg,#FFFFFF_28.99%,rgba(255,255,255,0.5)_85.87%)] bg-clip-text text-transparent tracking-wide">
                Address
              </p>
              <p className="text-[26px] leading-9 font-light">
                6686 Ibn Sirin, Al Rawdah, Saudi Arabia
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-24 ml-2">
          <Image
            src={xIcon}
            alt=""
            width={48}
            height={48}
            className="cursor-pointer"
          />
          <Image
            src={instagramIcon}
            alt=""
            width={48}
            height={48}
            className="cursor-pointer"
          />
          <Image
            src={facebookIcon}
            alt=""
            width={48}
            height={48}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
