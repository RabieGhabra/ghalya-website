import HeaderBanner from "../../components/sections/HeaderBanner";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Footer from "../../components/layout/Footer";
import Intro from "../../components/sections/our-partners/Intro";
import Supermarket from "../../components/sections/our-partners/Supermarket";
import Visa from "../../components/sections/our-partners/Visa";
import JoinProgram from "../../components/sections/our-partners/JoinProgram";

export default function OurPartnersPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-crisp-white">
      <HeaderBanner title="Our Partners" />
      <Breadcrumb
        className="mt-10 sm:mt-20 ml-4 sm:ml-8"
        title={
          <>
            <span className="font-extralight text-gray-500">Our</span> Partners
          </>
        }
      />
      <Intro />
      <Supermarket />
      <Visa />
      <JoinProgram />
      <Footer />
    </main>
  );
}
