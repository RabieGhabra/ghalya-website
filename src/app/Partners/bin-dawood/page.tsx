import HeaderBanner from "../../../components/sections/HeaderBanner";
import Breadcrumb from "../../../components/layout/Breadcrumb";
import PartnersHero from "../../../components/sections/partners/PartnersHero";
import HowItWorks from "../../../components/sections/partners/HowItWorks";
import Benefits from "../../../components/sections/partners/Benefits";
import { binDawoodBenefits } from "../../../components/data/ghalyaData";

export default function BinDawoodPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-crisp-white">
      <HeaderBanner title="Bindawood Supermarkets" />
      <Breadcrumb
        title="Bindawood"
        parent={{
          label: "Partners",
          href: "/partners",
        }}
      />
      <PartnersHero
        image={`${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/SyMHv.jpg`}
        maxWidth="max-w-148"
        title="Where Every Purchase Rewards"
        paragraphs={[
          "In our ongoing commitment to enrich your shopping experience, we're delighted to introduce BinDawood Supermarkets as a prestigious partner of the Ghalya Loyalty Program.",
          "This partnership is a testament to our shared vision of providing exceptional value and satisfaction to our customers across the Saudi region. By integrating the Ghalya Loyalty Program with your shopping routine at BinDawood Supermarkets, every purchase becomes an opportunity to earn rewards that elevate your lifestyle.",
        ]}
      />
      <HowItWorks>
        <p className="font-lexend text-[18px] sm:text-[23px] leading-6 sm:leading-7 tracking-normal text-[#121212]">
          When you shop at BinDawood Supermarkets, your purchases unlock a world
          of rewards through the Ghalya Loyalty Program. This unique
          collaboration ensures that every riyal spent not only brings you
          high-quality products but also rewards you with Ghalya points.
        </p>
      </HowItWorks>
      <Benefits
        heading="Exclusive Benefits for Bin Dawood Shoppers"
        cards={binDawoodBenefits}
      />
    </main>
  );
}
