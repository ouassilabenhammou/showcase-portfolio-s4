import { createServer } from "@/lib/supabase/server";
import Image from "next/image";
import Link from "next/link";

export default async function Projecten() {
  const supabase = await createServer();

  // Fetch only projects that are NOT hidden
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_hidden", false)
    .order("created_at", { ascending: false });

  if (error) console.error(error);

  return (
    <section
      id="projecten"
      className="min-h-screen flex flex-col items-center "
    >
      <h1 className="font-heading text-[48px] mb-20">PROJECTEN</h1>
      <div className="w-full h-[600px] grid grid-cols-5 place-items-center">
        {/* Accolade-links */}
        <div className="justify-self-start">
          <Image
            src="/illustrations/accolade-links.svg"
            alt="accolade-links illustratie"
            width={61}
            height={61}
          />
        </div>

        {/* Projecten */}
        <div className="w-full col-span-3">
          {/* Als er geen projecten zijn */}
          {!projects || projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-500 dark:text-zinc-400">
                No projects to display yet
              </p>
            </div>
          ) : (
            // Preview van de projecten
            <div>
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/project/${project.slug}`}
                  className="group block"
                >
                  <article className="w-full h-[545px] bg-white/10 border border-white/15 rounded-[10px]">
                    {project.cover_url && (
                      <div className="relative w-full h-full flex flex-col items-center justify-end">
                        <Image
                          src={project.cover_url}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover rounded-[15px] p-2"
                        />

                        {/* Overlay */}
                        <div className=" absolute w-full h-[543px] bg-[#161616]/40 rounded-[10px] flex "></div>

                        <div className="absolute bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[10px] mb-5 w-full max-w-[685px] h-[116px] flex flex-col justify-center p-10 font-body">
                          <div className="flex flex-col gap-5">
                            {/* Titel + Jaar */}
                            <div className="flex justify-between">
                              <h1 className="text-[20px] font-semibold ">
                                {project.title}
                              </h1>

                              {project.year && (
                                <div className="text-cremewhite/40 text-[16px]">
                                  {project.year}
                                </div>
                              )}
                            </div>

                            {/* Tag */}

                            {project.tags && project.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag: string) => (
                                  <span
                                    key={tag}
                                    className="bg-beige py-2 px-4 rounded-[3px] text-[18px]"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>

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
