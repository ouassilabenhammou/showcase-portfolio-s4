import Image from "next/image";

export default function Projecten() {
  return (
    <section
      id="projecten"
      className="min-h-screen flex flex-col items-center "
    >
      <h1 className="font-heading text-[48px]">PROJECTEN</h1>
      <div className="w-full h-150 grid grid-cols-3 border border-black place-items-center">
        <div className="justify-self-start">
          accolade-links
          {/* <Image
            src="/illustrations/accolade-links.svg"
            alt="accolade-links illustratie"
            width={61}
            height={61}
          /> */}
        </div>
        <div>projecten</div>
        <div className="justify-self-end">
          accolade-rechts
          {/* <Image
            src="/illustrations/accolade-rechts.svg"
            alt="accolade-links illustratie"
            width={61}
            height={61}
          /> */}
        </div>
      </div>
    </section>
  );
}
