import HeaderBanner from "../../../components/sections/HeaderBanner";
import Breadcrumb from "../../../components/layout/Breadcrumb";
import PartnersHero from "../../../components/sections/partners/PartnersHero";
import HowItWorks from "../../../components/sections/partners/HowItWorks";
import Benefits from "../../../components/sections/partners/Benefits";
import { danubeBenefits } from "../../../components/data/ghalyaData";

export default function DanubePage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-crisp-white">
      <HeaderBanner title="Danube" />
      <Breadcrumb
        title="Danube"
        parent={{
          label: "Partners",
          href: "/partners",
        }}
      />
      <PartnersHero
        image={`${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/lsAED.jpg`}
        maxWidth="max-w-170"
        title={
          <>
            Transform Your Grocery
            <br />
            Runs into Rewarding
            <br />
            Experiences
          </>
        }
        paragraphs={[
          "We are thrilled to announce Danube Supermarkets as a key partner of the Ghalya Loyalty Program, bringing an added layer of delight to your grocery shopping in the Saudi region.",
          "This collaboration is designed to intertwine the convenience and quality of shopping at Danube with the rewarding benefits of the Ghalya Loyalty Program, ensuring every purchase goes beyond just fulfilling your grocery needs-it becomes a step towards rewarding experiences.",
        ]}
      />
      <HowItWorks withTopMargin>
        <p className="font-lexend text-[18px] sm:text-[23px] leading-6 sm:leading-7 tracking-normal text-[#121212]">
          As a shopper at Danube Supermarkets, you're automatically positioned
          to earn Ghalya points on your purchases.
          <span className="block mt-4">
            This partnership ensures that each riyal you spend not only provides
            you with premium products but also brings you closer to a multitude
            of rewards. Accumulate points effortlessly with each transaction and
            watch as your everyday shopping unlocks a world of exclusive rewards
            and experiences.
          </span>
        </p>
      </HowItWorks>
      <Benefits
        heading="Exclusive Benefits for Danube Shoppers"
        cards={danubeBenefits}
      />
    </main>
  );
}
