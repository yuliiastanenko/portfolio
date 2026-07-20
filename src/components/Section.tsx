type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id}>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mb-8 font-display text-3xl text-ink">{title}</h2>
        {children}
      </div>
    </section>
  );
}