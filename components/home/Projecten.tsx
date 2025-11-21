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
      <div className="w-full h-[600px] grid grid-cols-3 place-items-center">
        <div className="justify-self-start">
          <Image
            src="/illustrations/accolade-links.svg"
            alt="accolade-links illustratie"
            width={61}
            height={61}
          />
        </div>

        {/* Projecten */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {!projects || projects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-zinc-500 dark:text-zinc-400">
                No projects to display yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/project/${project.slug}`}
                  className="group block"
                >
                  <article className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
                    {project.cover_url && (
                      <div className="relative w-full h-48">
                        <Image
                          src={project.cover_url}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h2>
                      {project.summary && (
                        <p className="mt-2 text-zinc-600 dark:text-zinc-400 line-clamp-3">
                          {project.summary}
                        </p>
                      )}
                      {project.tags && project.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
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
