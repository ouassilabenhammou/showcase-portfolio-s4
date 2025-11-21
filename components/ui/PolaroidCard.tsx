import Image from "next/image";

interface PolaroidCardProps {
  src: string;
  text: string;
  className?: string;
}

const PolaroidCard = ({ src, text, className }: PolaroidCardProps) => {
  return (
    <div
      className={`w-[325px] h-[365px] flex flex-col items-center gap-[15px] p-3 shrink-0 bg-cremewhite shadow-md ${className}`}
    >
      <div className="relative w-full h-[280px] overflow-hidden">
        <Image src={src} alt={text} fill className="object-cover" />
      </div>
      <div className="text-center">
        <p className="font-accent text-[24px] text-bg">{text}</p>
      </div>
    </div>
  );
};

export default PolaroidCard;
