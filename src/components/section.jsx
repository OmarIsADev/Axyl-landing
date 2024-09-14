export default function Section({ children, title, description, classNames = {wrapper: "", header: ""} }) {
  return (
    <section className={`${classNames.wrapper} grid w-full grid-flow-row gap-6 lg:px-[72px] px-9 py-10 lg:grid-cols-2 lg:py-16`}>
      <div className={`${classNames.header} flex w-full flex-col gap-2.5 px-9 py-8 text-start lg:items-end lg:text-end`}>
        <h1 className={`text-[32px] font-bold leading-8 text-[var(--text)]`}>
          {title}
        </h1>
        <p className="max-w-sm text-pretty text-[var(--light-text)]">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}
