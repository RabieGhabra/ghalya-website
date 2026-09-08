import { StaticImageData } from "next/image";

/* ================= IMAGES ================= */
import DataIcon from "../../assets/icons/data.png";
import GrowthIcon from "../../assets/icons/growth.png";
import CommsIcon from "../../assets/icons/comms.png";
import AnalyticsIcon from "../../assets/icons/analytics.png";

import pointsIcon from "../../assets/icons/Group-2147226574 (3).png";
import giftBoxIcon from "../../assets/icons/Group-2147226574 (1).png";
import memberBadgeIcon from "../../assets/icons/Group-2147226574 (2).png";
import exchangeIcon from "../../assets/icons/Group-2147226575.png";

import basketIcon from "../../assets/icons/Group-2147226575 (1).png";
import catalogIcon from "../../assets/icons/Group-2147226577.png";
import discountTagIcon from "../../assets/icons/Group-2147226579.png";
import shoppingFlowIcon from "../../assets/icons/Group-2147226578.png";

import globeIcon from "../../assets/icons/Group-2147226584.png";
import sparkleIcon from "../../assets/icons/Group-2147226577 (1).png";
import cardIcon from "../../assets/icons/Group-2147226579 (1).png";
import walletIcon from "../../assets/icons/Group-2147226585.png";
/* ================= NAV ================= */
export const navItems = [
  { name: "Our Partners", href: "/our-partners" },
  { name: "Testimonials", href: "" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "FAQ", href: "/faq" },
];
/* ================= BENEFITS ================= */
export interface BenefitCard {
  titleTop: string;
  titleBottom: string;
  icon: StaticImageData;
  gradient: string;
}
export const benefitCards: BenefitCard[] = [
  {
    titleTop: "Access to",
    titleBottom: "Big Data",
    icon: DataIcon,
    gradient:
      "bg-[linear-gradient(180deg,rgba(229,28,92,1)_0%,rgba(229,28,92,0.5)_100%)]",
  },
  {
    titleTop: "Business",
    titleBottom: "Growth",
    icon: GrowthIcon,
    gradient:
      "bg-[linear-gradient(180deg,rgba(237,140,255,1)_0%,rgba(208,100,228,0.5)_100%)]",
  },
  {
    titleTop: "Real Time",
    titleBottom: "Comms",
    icon: CommsIcon,
    gradient:
      "bg-[linear-gradient(180deg,rgba(229,28,92,1)_0%,rgba(229,28,92,0.5)_100%)]",
  },
  {
    titleTop: "Enhanced",
    titleBottom: "Analytics",
    icon: AnalyticsIcon,
    gradient:
      "bg-[linear-gradient(180deg,rgba(237,140,255,1)_0%,rgba(208,100,228,0.5)_100%)]",
  },
];
/* ================= ABOUT CARDS ================= */
export interface AboutCard {
  title: string;
  bg: string;
}
export const aboutCards: AboutCard[] = [
  {
    title: "Shop",
    bg: `${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group-2147226545.png`,
  },
  {
    title: "Earn Points",
    bg: `${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group-2147226546.png`,
  },
  {
    title: "Redeem Rewards",
    bg: `${process.env.NODE_ENV === "production" ? "/ghalya-website" : ""}/images/Group-2147226544.png`,
  },
];
/* ================= REASONS ================= */
export interface Reason {
  number: string;
  title: string;
  description: string;
}
export const reasons: Reason[] = [
  {
    number: "1",
    title: "Boost your\nSales",
    description:
      "Attract more customers and increase your sales with our extensive member base eager to earn and spend loyalty points.",
  },
  {
    number: "2",
    title: "Expand\nYour Reach",
    description:
      "Attract more customers and increase your Tap  into a larger customer pool without the extra marketing spend. Our network is your platform for growth. eager to earn and spend loyalty points.",
  },
  {
    number: "3",
    title: "Insightful\nData",
    description:
      "Leverage shared insights to understand customer behaviors and preferences, tailoring your offerings for maximum impact.",
  },
  {
    number: "4",
    title: "Cost-Saving\nMarketing",
    description:
      "Save on the costs of running an independent loyalty program while benefiting from our collective marketing efforts.",
  },
  {
    number: "5",
    title: "Elevate\nYour Brand",
    description:
      "Attract more customers and increase your sales with our extensive member base eager to earn and spend loyalty points.",
  },
  {
    number: "6",
    title: "Promotional\nPower",
    description:
      "Collaborate with fellow brands for joint marketing initiatives, multiplying your visibility and appeal.",
  },
  {
    number: "7",
    title: "Retain\nCustomers",
    description:
      "Keep your customers coming back with compelling rewards and the convenience of earning points across a variety of purchases.",
  },
  {
    number: "8",
    title: "Stand Out from the\nCompetition",
    description:
      "Gain a competitive edge with a loyalty program that offers more value and variety to your customers.",
  },
];
/* ================= TESTIMONIALS ================= */
export interface Testimonial {
  quote: string;
  author: string;
}
export const testimonials: Testimonial[] = [
  {
    quote:
      "Earning and redeeming points with the Ghalya Loyalty Program is incredibly easy and feels like a natural part of my shopping routine. It's like the program understands exactly what we value in our culture—generosity and hospitality—making every visit to BinDawood and Danube more rewarding. Truly, Ghalya turns everyday shopping into a joy",
    author: "Sara Al-Faisal,\n34-year-old teacher",
  },
  {
    quote:
      "The Ghalya Loyalty Program makes shopping feel more rewarding without any extra effort. I earn points automatically and redeem them just as easily, which fits perfectly into my routine. It’s thoughtful and aligns well with how we appreciate value and generosity in our daily lives. Shopping at BinDawood and Danube now feels more enjoyable every time.",
    author: "Fahad Al-Harbi,\n41-year-old engineer",
  },
];
/* ================= FAQ ================= */
export const faqItems: string[] = [
  "How does joining the Ghalya loyalty program benefit my business?",
  "What are the costs involved in joining the Ghalya program?",
  "How is customer data handled within the Ghalya program?",
  "How will my business be promoted within the coalition?",
  "How are rewards and points managed?",
  "How can I track the performance of my participation in the program?",
];
/* ================= FOOTER ================= */
export interface FooterItem {
  label: string;
  href?: string;
}
export interface FooterColumn {
  title: string;
  items: FooterItem[];
}
export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    items: [
      { label: "Home", href: "/" },
      { label: "Earn Points" },
      { label: "Redeem Points" },
      { label: "Partner Stores" },
      { label: "Offers & Promotions" },
    ],
  },
  {
    title: "Ghalya Program",
    items: [
      { label: "How It Works" },
      { label: "Benefits" },
      { label: "Ghalya Visa Card", href: "/Partners/visa" },
      { label: "Tiers & Rewards" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Partner Stores",
    items: [
      { label: "BinDawood", href: "/Partners/bin-dawood" },
      { label: "Danube", href: "/Partners/danube" },
      { label: "All Partners", href: "/our-partners" },
      { label: "Store Locator" },
      { label: "New Arrivals" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Terms & Conditions" },
      { label: "Privacy Policy" },
      { label: "Notices" },
    ],
  },
];
/* ================= danubeBenefits ================= */
export const danubeBenefits = [
  {
    icon: pointsIcon,
    title: "Rewards on",
    highlightedText: "Every Purchase",
    description:
      "Earn Ghalya points on all your purchases at Danube Supermarkets, turning your grocery shopping into a rewarding journey.",
  },
  {
    icon: giftBoxIcon,
    title: "Curated",
    highlightedText: "Rewards Collection",
    description:
      "Redeem your points from a specially curated collection of rewards.",
  },
  {
    icon: memberBadgeIcon,
    title: "Member-Only",
    highlightedText: "Offers",
    description:
      "Gain access to special offers, promotions, and events exclusively for Ghalya Loyalty Program members at Danube.",
  },
  {
    icon: exchangeIcon,
    title: "Smooth and",
    highlightedText: "Easy Redemption",
    description:
      "The Ghalya Loyalty Program is crafted for your convenience, ensuring a smooth transition from earning points to enjoying your rewards.",
  },
];
/* ================= binDawoodBenefits ================= */
export const binDawoodBenefits = [
  {
    icon: basketIcon,
    title: "Earn on",
    highlightedText: "Everyday Purchases",
    description:
      "Make your daily shopping more rewarding by earning Ghalya points on all your purchases at BinDawood Supermarkets.",
  },
  {
    icon: catalogIcon,
    title: "Diverse",
    highlightedText: "Rewards Catalog",
    description:
      "Your earned points grant you access to a diverse catalog of rewards, ensuring there's always something enticing to redeem, matching your interests and lifestyle.",
  },
  {
    icon: discountTagIcon,
    title: "Special Offers &",
    highlightedText: "Promotions",
    description:
      "Enjoy access to exclusive offers, promotions, and events designed specifically for Ghalya Loyalty Program members shopping at BinDawood Supermarkets.",
  },
  {
    icon: shoppingFlowIcon,
    title: "Seamless",
    highlightedText: "Shopping Experience",
    description:
      "With Ghalya, the process from earning to redeeming points is designed to be as seamless as your shopping journey, offering you convenience at every step.",
  },
];
/* ================= VisaBenefits ================= */
export const VisaBenefits = [
  {
    icon: globeIcon,
    title: "Global Spending,",
    highlightedText: "Local Rewards",
    description:
      "Enjoy the freedom to shop around the globe with your Visa card and earn Ghalya points on your purchases, bringing the world of rewards right to your doorstep.",
  },
  {
    icon: sparkleIcon,
    title: "Tailored",
    highlightedText: "Experiences",
    description:
      "Dive into an array of meticulously selected rewards ranging from luxurious travel escapades and lifestyle perks to unique local experiences.",
  },
  {
    icon: cardIcon,
    title: "Seamless",
    highlightedText: "Rewards Earning",
    description:
      "With every swipe of your Visa card, accumulate Ghalya points automatically, making every transaction more rewarding.",
  },
  {
    icon: walletIcon,
    title: "Effortless",
    highlightedText: "Redemption",
    description:
      "Accessing and redeeming your earned points is straightforward and user-friendly, ensuring a seamless journey from earning to enjoying your rewards.",
  },
];

