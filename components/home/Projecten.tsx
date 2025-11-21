import Image from "next/image";

export default function Projecten() {
  return (
    <section
      id="projecten"
      className="min-h-screen flex flex-col items-center "
    >
      <h1 className="font-heading text-[48px] mb-20">PROJECTEN</h1>
      <div className="w-full h-[600px] grid grid-cols-3 place-items-center">
        <div className="justify-self-start">
          <Image
            src="/illustrations/accolade-links.svg"
            alt="accolade-links illustratie"
            width={61}
            height={61}
          />
        </div>
        <div>projecten</div>
        <div className="justify-self-end">
          <Image
            src="/illustrations/accolade-rechts.svg"
            alt="accolade-links illustratie"
            width={61}
            height={61}
          />
        </div>
      </div>
    </section>
  );
}
