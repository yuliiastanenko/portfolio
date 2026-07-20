import FleeingBugs from "./FleeingBugs";

export default function Hero() {
  return (
    <section id="home">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-teal">
            Fullstack developer
          </p>

          <h1 className="font-display text-5xl leading-tight text-ink md:text-6xl">
            Yuliia <span className="italic text-teal">Stanenko</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            I build cross-platform apps with React Native and Node.js, and bring
            a research background in data-driven modeling to how I approach
            product problems.
          </p>

          <a
            href="/cv/Yuliia_Stanenko_CV.pdf"
            download
            className="mt-8 inline-block rounded-full bg-teal px-6 py-3 text-sm font-medium text-paper hover:opacity-90"
          >
            Download CV
          </a>

          <div className="mt-12 flex gap-10">
            <div>
              <p className="font-display text-2xl text-ink">2+</p>
              <p className="text-sm text-ink-soft">years of experience</p>
            </div>
            <div>
              <p className="font-display text-2xl text-ink">2</p>
              <p className="text-sm text-ink-soft">apps in TestFlight</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:justify-end">
          <FleeingBugs />
        </div>
      </div>
    </section>
  );
}
