import { createServer } from "@/lib/supabase/server";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Markdown from "react-markdown";
import ProjectButton from "@/components/ui/ProjectButton";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createServer();
  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  // Andere projecten ophalen onderaan de pagina

  const { data: otherProjects } = await supabase
    .from("projects")
    .select("*")
    .neq("slug", slug)
    .limit(3);

  if (error || !project) {
    notFound();
  }

  return (
    <div className="min-h-screen mt-30 font-body ">
      <main>
        <h1 className="text-[48px] font-heading mb-4 flex justify-center">
          {project.title}
        </h1>

        <article className="space-y-40">
          <div className="">
            {project.is_hidden && (
              <div className="mb-4 p-3 flex justify-center items-center">
                <p className="text-sm text-white/40">
                  This project is hidden from the public view
                </p>
              </div>
            )}

            <div className="grid grid-cols-5 ">
              {project.cover_url && (
                <div className="relative  col-start-2 col-end-5 w-full max-w-[835px] h-[525px] rounded-lg mb-8 overflow-hidden  bg-white/10 border border-white/15 ">
                  <Image
                    src={project.cover_url}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 768px, 100vw"
                    className="object-cover rounded-[15px] p-2"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Tags */}

            <div>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center">
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

          <div className="space-y-20 mb-40 ">
            <h1 className="flex justify-center font-heading text-[48px]">
              HET PROCES
            </h1>

            <div className="grid grid-cols-2 h-[545px] j">
              {project.content && (
                <div className="prose prose-zinc dark:prose-invert max-w-none flex flex-col justify-between ">
                  <div className="whitespace-pre-wrap max-w-[428px]">
                    <Markdown>{project.content}</Markdown>
                  </div>

                  <div className="flex gap-10">
                    {/* Link naar GitHub */}

                    {project.github_url && (
                      <ProjectButton href={project.github_url} text="GitHub" />
                    )}

                    {project.live_url && (
                      <ProjectButton href={project.live_url} text="Live site" />
                    )}
                  </div>
                </div>
              )}

              <div className=" w-full  bg-white/10 border border-white/20 rounded-[10px] overflow-hidden">
                Foto's van het project hier plaatsen
              </div>
            </div>
          </div>
        </article>

        {/* Andere projecten */}

        {otherProjects && otherProjects.length > 0 && (
          <section>
            <h1 className="font-heading text-[48px] flex justify-center">
              ANDERE PROJECTEN
            </h1>

            <div className="grid grid-cols-3 gap-5 mt-10 mb-40">
              {otherProjects.map((otherProject) => (
                <Link
                  key={otherProject.id}
                  href={`/project/${otherProject.slug}`}
                  className="group block"
                >
                  <article className="w-full h-[255px] bg-white/10 border border-white/15 rounded-[10px]">
                    {otherProject.cover_url && (
                      <div className="relative w-full h-full flex flex-col items-center justify-end">
                        <Image
                          src={otherProject.cover_url}
                          alt={otherProject.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover rounded-[15px] p-2"
                        />

                        {/* Overlay */}

                        <div className=" absolute w-full h-[253px] bg-[#161616]/40 rounded-[10px] flex"></div>

                        <div className="absolute bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[5px] mb-5 w-full max-w-[330px] h-[70px] flex flex-col justify-center p-5 font-body">
                          <div className="flex flex-col gap-2">
                            {/* Titel + Jaar */}

                            <div className="flex justify-between">
                              <h1 className="text-[16px] font-semibold ">
                                {otherProject.title}
                              </h1>

                              {otherProject.year && (
                                <div className="text-cremewhite/40 text-[12px]">
                                  {project.year}
                                </div>
                              )}
                            </div>

                            {/* Tag */}

                            {otherProject.tags && project.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {otherProject.tags.map((tag: string) => (
                                  <span
                                    key={tag}
                                    className="bg-beige py-1 px-2 rounded-[3px] text-[14px]"
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
          </section>
        )}
      </main>
    </div>
  );
}
