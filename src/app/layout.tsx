import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Ghalya Business - Loyalty Program",
  description: "Join Saudi Arabia's Premier Retail Loyalty Program",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Lexend+Deca:300,400,500,600"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}