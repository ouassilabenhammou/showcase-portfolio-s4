import PolaroidCard from "../ui/PolaroidCard";

export default function HeroSection() {
  return (
    <section id="#" className="min-h-screen grid grid-cols-3 items-end">
      <div className="col-span-2 leading-none">
        <h1 className="font-heading text-[175px]">HI</h1>
        <h1 className="font-heading text-[175px]">IK BEN</h1>
        <h1 className="font-heading text-[225px]">OUASSILA</h1>
      </div>

      {/* rotate-4 nog toevoegen*/}
      <div className="justify-self-end mb-7 ">
        {/* <PolaroidCard src="/images/ditbenik.png" text="Dit ben ik" /> */}
      </div>
    </section>
  );
}
