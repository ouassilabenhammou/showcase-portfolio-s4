import "./globals.css";
import { inter, caveat, impact } from "./fonts";

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
      <body>{children}</body>
    </html>
  );
}
