type Props = {
  monogram: string;
  logoSrc?: string;
  logoAlt?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: "h-11 w-11 rounded-xl text-sm",
  md: "h-14 w-14 rounded-2xl text-lg",
  lg: "h-20 w-20 rounded-2xl text-2xl",
} as const;

/**
 * Client/company mark for a case study. Shows the real logo image when we
 * have one; otherwise a designed monogram tile in the site's visual language
 * (never a guessed or misattributed logo).
 */
export default function CompanyLogo({
  monogram,
  logoSrc,
  logoAlt,
  size = "md",
  className = "",
}: Props) {
  if (logoSrc) {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center overflow-hidden border border-white/10 bg-white ${sizes[size]} ${className}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt={logoAlt ?? `${monogram} logo`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </span>
    );
  }
  return (
    <span
      aria-hidden
      className={`inline-flex shrink-0 items-center justify-center border border-lime-300/25 bg-gradient-to-br from-lime-300/20 via-lime-300/[0.06] to-transparent font-mono font-bold tracking-tight text-lime-300 ${sizes[size]} ${className}`}
    >
      {monogram}
    </span>
  );
}
