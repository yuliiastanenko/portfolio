import Section from "./Section";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-border bg-white p-6"
          >
            <p className="mb-3 font-display text-base font-semibold text-teal">
              {group.category}
            </p>
            <ul className="flex flex-col gap-1">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}