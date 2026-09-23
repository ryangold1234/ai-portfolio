type Props = {
  index: string;
  kicker: string;
  title: string;
  className?: string;
};

export default function SectionHeading({ index, kicker, title, className = "" }: Props) {
  return (
    <div className={className}>
      <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
        {index} — {kicker}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
