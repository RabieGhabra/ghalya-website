import HeaderBanner from "../../../components/sections/HeaderBanner";
import Breadcrumb from "../../../components/layout/Breadcrumb";
import PartnersHero from "../../../components/sections/partners/PartnersHero";
import HowItWorks from "../../../components/sections/partners/HowItWorks";
import Benefits from "../../../components/sections/partners/Benefits";
import { VisaBenefits } from "../../../components/data/ghalyaData";
export default function VsaPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-crisp-white">
      <HeaderBanner title="Visa" />
      <Breadcrumb
        title="Visa"
        parent={{
          label: "Partners",
          href: "/partners",
        }}
      />
      <PartnersHero
        image={`${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Ik6ime7K.jpg`}
        paragraphsMaxWidth="max-w-148"
        title="Experience Unmatched Rewards with Every Purchase"
        paragraphs={[
          "In our continuous quest to bring unparalleled value and convenience to our customers, we are thrilled to spotlight Visa as a distinguished partner of the Ghalya Loyalty Program.",
          "This partnership marks a significant milestone in our endeavor to enrich the banking experience for our customers in the Saudi region, offering an exclusive cobranded points-earning opportunity that blends the global acceptance of Visa with the rewarding essence of the Ghalya Loyalty Program.",
        ]}
      />
      <HowItWorks withTopMargin>
        <p className="font-lexend text-[18px] sm:text-[23px] leading-6 sm:leading-7 tracking-normal text-[#121212]">
          As part of this collaboration, banks in the Saudi region can extend to
          their clientele the unique opportunity to own a Visa card that is
          directly linke d to the Ghalya Loyalty Program. This integration means
          that with every transaction made using the Visa card, customers earn
          Ghalya points, redeemable for a wide range of rewards and experiences
          curated to cater to diverse tastes and preferences.
        </p>
      </HowItWorks>
      <Benefits
        heading="Exclusive Benefits for Danube Shoppers"
        cards={VisaBenefits}
      />
    </main>
  );
}
