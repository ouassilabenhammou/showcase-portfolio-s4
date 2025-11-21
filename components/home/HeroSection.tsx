import PolaroidCard from "../ui/PolaroidCard";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="#" className="min-h-screen grid grid-cols-3 items-end">
      <div className="col-span-2 leading-none">
        <h1 className="font-heading text-[175px]">HI</h1>
        <h1 className="font-heading text-[175px]">IK BEN</h1>
        <h1 className="font-heading text-[225px] relative whitespace-nowrap">
          OUASS
          <span className="relative inline-block align-top">
            I
            <Image
              src="/illustrations/punt.svg"
              alt="Punt"
              width={51}
              height={50}
              className="absolute left-1/2 -translate-x-1/2 -top-[55px]"
            />
          </span>
          LA
        </h1>
      </div>

      <div className="justify-self-end mb-7 rotate-4">
        <PolaroidCard src="/images/ditbenik.png" text="Dit ben ik" />
      </div>
    </section>
  );
}
