import Link from "next/link";

interface ProjectButtonProps {
  text: string;
  href: string;
}
const ProjectButton = ({ text, href }: ProjectButtonProps) => {
  return (
    <Link
      href={href}
      className="flex items-center justify-center mt-6 w-full max-w-[123px] h-[46px] bg-white/10 border border-white/15 hover:bg-limegreen hover:text-dgrey rounded-full  py-3 px-6 transition-colors duration-200"
    >
      {text}
    </Link>
  );
};

export default ProjectButton;
