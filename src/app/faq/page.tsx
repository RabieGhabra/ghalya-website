"use client";
import { JSX } from "react";
import HeaderBanner from "../../components/sections/HeaderBanner";
import Breadcrumb from "../../components/layout/Breadcrumb";
import FAQ from "../../components/sections/home/FAQ";
import Footer from "../../components/layout/Footer";

export default function FAQPage(): JSX.Element {
  return (
    <main className="relative w-full overflow-x-hidden bg-crisp-white">
      <HeaderBanner title="Frequently Asked Questions" />
      <Breadcrumb title="Frequently Asked Questions" />
      <FAQ showBackground={false} showTitle={false} showCTA={false} />
      <Footer />
    </main>
  );
}
