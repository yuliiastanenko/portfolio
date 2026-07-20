import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block rounded-xl border border-border bg-white p-5 hover:border-teal"
          >
            {project.image ? (
              <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-lg bg-teal-light">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="mb-4 flex aspect-square items-center justify-center rounded-lg bg-teal-light text-sm text-teal">
                {project.title} screenshot
              </div>
            )}

            <p className="mb-2 font-medium text-ink">{project.title}</p>
            <p className="mb-4 text-sm leading-relaxed text-ink-soft">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-teal-light px-3 py-1 text-xs text-teal"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm font-medium text-teal">
              View project →
            </p>
          </Link>
        ))}
      </div>
    </Section>
  );
}