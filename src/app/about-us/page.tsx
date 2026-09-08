import HeaderBanner from "../../components/sections/HeaderBanner";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Footer from "../../components/layout/Footer";
import AboutHero from "../../components/sections/about-us/AboutHero";
import AboutContent from "../../components/sections/about-us/AboutContent";
import AboutCards from "../../components/sections/about-us/AboutCards";

export default function AboutUsPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-crisp-white">
      <HeaderBanner title="About Us" />
      <Breadcrumb title="About Us" />
      <section className="container mx-auto px-4 py-10 lg:py-16">
        <AboutHero />
        <AboutContent />
        <AboutCards />
      </section>
      <Footer />
    </main>
  );
}
