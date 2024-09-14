import monitor from "/monitor.png";

export default function Hero() {
  return (
    <section className="flex h-vh h-dvh w-full flex-col gap-4 overflow-hidden bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat px-9 pt-[calc(72px+36px)] lg:flex-row lg:pr-0 xl:justify-around">
      {/* header */}
      <div className="flex w-full max-w-[500px] flex-col items-start gap-8">
        <h1 className="text-6xl font-bold uppercase text-[var(--text)] lg:text-8xl">
          faster <br />
          <span className="gradient-text">reliable</span> <br />
          simple
        </h1>

        <button className="button-primary h-fit px-9 py-4">
          get your AXYL-OS
        </button>

        {/* description */}
        <p className="text-[var(--light-text)]">
          Axyl is a Linux distro centered on tiling window managers. Level up
          your productivity with Hyprland, Arch Linux tweak tool, CachyOS-Kernal
          and more.
        </p>
      </div>

      {/* hero image */}
      <img
        src={monitor}
        className="relative bottom-0 left-0 object-cover object-left lg:h-[calc(100dvh-72px-36px)]"
        alt="hero image"
      />

      {/* botom gradient */}
      <div className="absolute bottom-0 right-0 h-52 w-full bg-gradient-to-t from-[var(--background)]"></div>
    </section>
  );
}
