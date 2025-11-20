import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex gap-[25px] h-[200px]">
      <div className="border border-black flex items-end overflow-hidden ">
        <span className="font-heading text-[225px] leading-[0.9]">
          OUASSILA
        </span>
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="border border-black flex justify-between">
          <div className="flex flex-col">
            <a href="#over-mij">Over mij</a>
            <a href="#projecten">Projecten</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="flex flex-col">
            <Link href="/">Mail</Link>
            <Link href="/">LinkedIn</Link>
          </div>
          <div className="flex flex-col">
            <Link href="/">GitHub</Link>
            <Link href="/">404</Link>
          </div>
        </div>
        <div className="border border-black overflow-hidden flex justify-between font-heading text-[125px] leading-none">
          <span>©</span>
          <span>2025</span>
        </div>
      </div>
    </footer>
  );
}
