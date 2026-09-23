const quotes = [
  {
    text: "Ryan is very intelligent and very industrious. Every day he accomplished a lot and made a difference.",
    source: "Stephen Lerer, JLK, Ltd.",
    context: "Formal recommendation letter, 2026",
  },
  {
    text: "His computer skills are amazing — and I don't say this without good cause. When he did not know something he would say out loud \u201coh, let's figure out how to do this.\u201d",
    source: "Stephen Lerer, JLK, Ltd.",
    context: "Formal recommendation letter, 2026",
  },
  {
    text: "My thought is that Ryan will be successful and make a positive contribution in whatever work he undertakes.",
    source: "Stephen Lerer, JLK, Ltd.",
    context: "Formal recommendation letter, 2026",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {quotes.map((q) => (
        <figure
          key={q.text.slice(0, 24)}
          className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <blockquote className="flex-1 leading-relaxed text-zinc-300">
            &ldquo;{q.text}&rdquo;
          </blockquote>
          <figcaption className="mt-6">
            <p className="text-sm font-semibold text-zinc-100">{q.source}</p>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-zinc-500">
              {q.context}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
