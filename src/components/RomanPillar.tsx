const RomanPillar = ({ className = "", side = "left" }: { className?: string; side?: "left" | "right" }) => {
  return (
    <svg
      viewBox="0 0 60 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${side === "right" ? "scale-x-[-1]" : ""}`}
    >
      {/* Capital (top) */}
      <rect x="5" y="30" width="50" height="6" rx="1" fill="currentColor" opacity="0.12" />
      <rect x="10" y="36" width="40" height="4" rx="1" fill="currentColor" opacity="0.10" />
      {/* Volute left */}
      <path d="M12 30 C12 22, 20 18, 24 22 C28 26, 20 30, 16 28" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.10" />
      {/* Volute right */}
      <path d="M48 30 C48 22, 40 18, 36 22 C32 26, 40 30, 44 28" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.10" />

      {/* Shaft with fluting */}
      <rect x="18" y="40" width="24" height="330" rx="2" fill="currentColor" opacity="0.06" />
      {/* Flutes */}
      <line x1="22" y1="45" x2="22" y2="365" stroke="currentColor" strokeWidth="0.8" opacity="0.08" />
      <line x1="26" y1="45" x2="26" y2="365" stroke="currentColor" strokeWidth="0.8" opacity="0.08" />
      <line x1="30" y1="45" x2="30" y2="365" stroke="currentColor" strokeWidth="0.8" opacity="0.08" />
      <line x1="34" y1="45" x2="34" y2="365" stroke="currentColor" strokeWidth="0.8" opacity="0.08" />
      <line x1="38" y1="45" x2="38" y2="365" stroke="currentColor" strokeWidth="0.8" opacity="0.08" />

      {/* Base */}
      <rect x="12" y="370" width="36" height="5" rx="1" fill="currentColor" opacity="0.10" />
      <rect x="8" y="375" width="44" height="6" rx="1" fill="currentColor" opacity="0.12" />
      <rect x="4" y="381" width="52" height="8" rx="2" fill="currentColor" opacity="0.08" />
    </svg>
  );
};

export default RomanPillar;
