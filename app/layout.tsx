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
      <body>
        <main className="grid-cols-12 mx-[120px] gap-5 bg-red-200 ">
          {children}
        </main>
      </body>
    </html>
  );
}
