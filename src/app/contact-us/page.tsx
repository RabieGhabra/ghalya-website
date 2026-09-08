import HeaderBanner from "../../components/sections/HeaderBanner";
import Breadcrumb from "../../components/layout/Breadcrumb";
import Footer from "../../components/layout/Footer";
import ContactInfo from "../../components/sections/contact-us/ContactInfo";
import ContactForm from "../../components/sections/contact-us/ContactForm";
import ContactMap from "../../components/sections/contact-us/ContactMap";

export default function ContactUsPage() {
  return (
    <main className="relative w-full overflow-x-hidden bg-crisp-white">
      <HeaderBanner title="Contact  us" />
      <Breadcrumb className="mt-10 ml-4 sm:ml-18" title="Contact Us" />
      <section className=" py-10">
        <div className="w-full max-w-425 mx-auto px-8 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-8">
            <ContactInfo />
            <ContactForm />
          </div>
          <ContactMap />
        </div>
      </section>
      <Footer />
    </main>
  );
}
