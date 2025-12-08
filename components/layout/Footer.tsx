import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex h-[200px] items-end justify-between">
      <div className="flex items-end ">
        {/* Naam */}
        <span className="text-cremewhite/10 font-heading text-[225px] leading-[0.9]">
          OUASSILA
        </span>
      </div>

      <div className="flex flex-col justify-between">
        {/* Nav-links */}
        <nav>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <a href="#over-mij">Over mij</a>
              <a href="#projecten">Projecten</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="flex flex-col ">
              <Link href="/">Mail</Link>
              <Link href="/">LinkedIn</Link>
            </div>
            <div className="flex flex-col ">
              <Link href="/">GitHub</Link>
              <Link href="/">404</Link>
            </div>
          </div>
        </nav>

        {/* © 2025 */}
        <div className="text-cremewhite/10 flex justify-between font-heading text-[125px] leading-none gap-[27px]">
          <span>©</span>
          <span>2025</span>
        </div>
      </div>
    </footer>
  );
}
