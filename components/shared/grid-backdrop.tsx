export function GridBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[780px] rounded-full bg-signal-500/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[360px] w-[360px] rounded-full bg-amber-500/5 blur-[100px]" />
    </div>
  );
}
