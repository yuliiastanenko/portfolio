import Section from "./Section";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-8">
        {experience.map((item) => (
          <div key={item.title} className="flex gap-6">
            <div className="w-32 flex-shrink-0">
              <p className="text-sm text-ink-soft">{item.year}</p>
              <p
                className={
                  item.type === "work"
                    ? "text-xs font-medium text-teal"
                    : "text-xs font-medium text-ochre"
                }
              >
                {item.type === "work" ? "Work" : "Education"}
              </p>
            </div>

            <div>
              <p className="font-medium text-ink">{item.title}</p>
              <p className="text-sm text-ink-soft">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}