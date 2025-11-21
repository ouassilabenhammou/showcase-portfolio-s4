import PolaroidCard from "../ui/PolaroidCard";
import Image from "next/image";
export default function OverMij() {
  return (
    <section
      id="over-mij"
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="font-heading text-[48px]">OVER MIJ</h1>
      <div className="h-150 grid grid-cols-3 ">
        <div className="border border-black flex flex-col justify-between">
          <div>
            <p>
              Ik ben Ouassila en ik studeer ICT aan Fontys Hogescholen en zit in
              mijn vierde semester, waar ik me specialiseer in front-end
              development. De afgelopen Semesters werkte ik aan projecten binnen
              media & design en ontdekte ik hoe leuk het is om techniek en
              creativiteit te combineren.
            </p>
          </div>
          <div>
            Zon
            {/* <Image
              src="/illustrations/zon.svg"
              alt="Zon illustratie"
              width={150}
              height={150}
            /> */}
          </div>
        </div>
        <div className="border border-black flex items-center justify-center">
          Polaroid cards
          {/* <div className="relative w-[325px] h-[365px]">
            <div className="absolute top-0 left-0 rotate-3">
              <PolaroidCard
                src="/images/ditbenikweer.png"
                text="Yup, dit ben ik weer"
              />
            </div>

            <div className="absolute top-0 left-0 ">
              <PolaroidCard src="/images/ditbenik.png" text="Dit ben ik weer" />
            </div>
          </div> */}
        </div>
        <div className="border border-black flex flex-col justify-between">
          <div className="place-self-end">
            Bloem
            {/* <Image
              src="/illustrations/bloem.svg"
              alt="Bloem illustratie"
              width={130}
              height={130}
            /> */}
          </div>
          <div>
            <p>
              Ik hou van projecten die me uitdagen om iets nieuws te leren. Als
              ik eenmaal in een idee duik, wil ik weten hoe het werkt en vooral
              hoe ik het beter kan maken. Mijn favoriete project tot nu toe? Een
              persoonlijk experiment waarin ik met verschillende AI-tools
              werkte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
