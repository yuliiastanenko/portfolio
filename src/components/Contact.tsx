import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-col gap-2 text-ink-soft">
        <p>juliastanenko@gmail.com</p>
        <p>Helsingborg, Sweden</p>

        <a
          href="https://github.com/yuliiastanenko"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal hover:underline"
        >
          github.com/yuliiastanenko
        </a>
      </div>

      <a
        href="/cv/Yuliia_Stanenko_CV.pdf"
        download
        className="mt-8 inline-block rounded-full bg-teal px-6 py-3 text-sm font-medium text-paper hover:opacity-90"
      >
        Download CV
      </a>
    </Section>
  );
}
