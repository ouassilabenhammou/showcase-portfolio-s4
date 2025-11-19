"use client";
import { useState } from "react";
import ThuisIcon from "@/public/icons/thuis.svg";
import OverMijIcon from "@/public/icons/over-mij.svg";
import ProjectenIcon from "@/public/icons/projecten.svg";
import ContactIcon from "@/public/icons/contact.svg";

type Nav = "thuis" | "over-mij" | "projecten" | "contact";

export default function Header() {
  const [active, setActive] = useState<Nav>("thuis"); // standaard actief

  const linkClasses = (name: Nav) => {
    if (name === active) {
      return "w-[55px] h-[55px] flex items-center justify-center rounded-full bg-black text-white"; // later de kleur aanpassen
    } else {
      return "w-[55px] h-[55px] flex items-center justify-center text-blue"; // later de kleur aanpassen
    }
  };

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2">
      <nav className="border border-black w-[300px] h-[65px] flex justify-between items-center p-2 rounded-full">
        <a
          href="#"
          onClick={() => setActive("thuis")}
          className={linkClasses("thuis")}
        >
          <ThuisIcon />
        </a>
        <a
          href="#over-mij"
          onClick={() => setActive("over-mij")}
          className={linkClasses("over-mij")}
        >
          <OverMijIcon />
        </a>
        <a
          href="#projecten"
          onClick={() => setActive("projecten")}
          className={linkClasses("projecten")}
        >
          <ProjectenIcon />
        </a>
        <a
          href="#contact"
          onClick={() => setActive("contact")}
          className={linkClasses("contact")}
        >
          <ContactIcon />
        </a>
      </nav>
    </header>
  );
}
