import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/#projects" className="text-sm text-teal">
        ← Back to projects
      </Link>

      <h1 className="mt-8 font-display text-4xl text-ink">{project.title}</h1>

      {project.image ? (
        <div className="relative my-8 aspect-square w-full overflow-hidden rounded-lg bg-teal-light">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="my-8 flex aspect-square items-center justify-center rounded-lg bg-teal-light text-sm text-teal">
          {project.title} screenshot
        </div>
      )}

      <p className="max-w-2xl leading-relaxed text-ink-soft">
        {project.longDescription}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-teal-light px-3 py-1 text-xs text-teal"
          >
            {tag}
          </span>
        ))}
      </div>
      {(project.demoUrl || project.videoUrl) && (
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-teal px-6 py-3 text-sm font-medium text-paper hover:opacity-90"
            >
              View demo
            </a>
          )}

          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-border px-6 py-3 text-sm font-medium text-ink hover:border-teal hover:text-teal"
            >
              Watch demo video
            </a>
          )}
          {project.demoEmail && (
            <p className="text-sm text-ink-soft">
              <span className="font-medium text-ink">Login:</span>{" "}
              <span className="rounded bg-teal-light px-2 py-1 font-mono text-xs text-teal">
                {project.demoEmail}
              </span>
            </p>
          )}

          {project.demoPassword && (
            <p className="text-sm text-ink-soft">
              <span className="font-medium text-ink">Password:</span>{" "}
              <span className="rounded bg-teal-light px-2 py-1 font-mono text-xs text-teal">
                {project.demoPassword}
              </span>
            </p>
          )}
        </div>
      )}
    </main>
  );
}
