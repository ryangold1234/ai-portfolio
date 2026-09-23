/**
 * A pipeline rendered as a connected vertical stepper — numbered nodes on a
 * spine, so the flow reads top-to-bottom on any screen size.
 */
export default function PipelineSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="relative mt-8 space-y-6 before:absolute before:bottom-3 before:left-[15px] before:top-3 before:w-px before:bg-lime-300/25">
      {steps.map((step, i) => (
        <li key={step} className="relative flex items-center gap-4 pl-12">
          <span
            aria-hidden
            className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border border-lime-300/40 bg-[#0b0b0d] font-mono text-xs font-bold text-lime-300"
          >
            {i + 1}
          </span>
          <span className="text-[15px] font-medium leading-snug text-zinc-200">
            {step}
          </span>
        </li>
      ))}
    </ol>
  );
}
