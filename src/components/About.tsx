import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="flex max-w-2xl flex-col gap-4 leading-relaxed text-ink-soft">
        <p>
          I&apos;m an AI &amp; full stack engineer with 2+ years of experience
          building production apps with TypeScript, Node.js and Python. I&apos;ve
          shipped two cross-platform apps to TestFlight for a Swedish healthtech
          company and won an accelerator program by building Walkey from concept
          to a deployed product.
        </p>
        <p>
          Now I focus on applied AI. As an AI/ML Research Intern at Lund
          University, I build a local LLM pipeline that turns conversation
          transcripts into structured, evaluated data. In my own projects I work
          with RAG with verified citations (DocTrace) and LLM-as-judge
          evaluation with automated checks in CI (StyleGuard). I care about
          measuring results against labelled data before scaling, and I think
          about privacy and responsible AI (GDPR, EU AI Act) from the start.
          I&apos;m based in Helsingborg, Sweden.
        </p>
      </div>
    </Section>
  );
}
