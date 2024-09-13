export default function Card({ children, title, description, bg }) {
  return (
    <div style={{ "background-color": bg}} className={`relative flex h-[356px] w-full flex-col items-start gap-2.5 overflow-hidden rounded-3xl border border-[var(--border)] p-9`}>
      <h3 className="text-2xl font-bold text-[var(--text)] z-10">{title}</h3>
      <p className="font-medium leading-5 text-[var(--text)] z-10 max-w-xs text-pretty">{description}</p>
      {children}
    </div>
  );
}
