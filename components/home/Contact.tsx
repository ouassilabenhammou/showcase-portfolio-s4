import Image from "next/image";
import SchuifButton from "../ui/SchuifButton";

export default function Contact() {
  return (
    <section id="contact" className="h-[500px] flex flex-col">
      <h1 className="font-heading text-[48px] flex justify-center mb-[66px]">
        CONTACT
      </h1>
      <div className="grid grid-cols-3">
        <div className="border border-black flex items-center ">
          mail
          {/* <Image
            src="/illustrations/mail.svg"
            alt="mail illustratie"
            width={275}
            height={275}
          /> */}
        </div>
        <div className="flex flex-col items-center gap-[50px] ">
          <p className="text-center">
            Interesse in een samenwerking? <br /> Neem contact op
          </p>
          <SchuifButton
            text="Neem contact"
            href="mailto:ouassila_01@outlook.com"
          />
        </div>
      </div>
    </section>
  );
}
