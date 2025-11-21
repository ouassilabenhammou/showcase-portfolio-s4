import "./globals.css";
import { inter, caveat, impact } from "./fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ouassila - Showcase Portfolio",
  description: "Showcase Portfolio van Ouassila",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${impact.variable}`}
    >
      <body className="bg-dgrey text-cremewhite">
        <main className="grid-cols-12 mx-[120px] gap-5">{children}</main>
      </body>
    </html>
  );
}
