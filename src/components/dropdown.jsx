import { useEffect, useState } from "react";

export default function Dropdown() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="relative lg:hidden">
      {/* menu button */}
      <div
        className={`group relative mr-9 h-6 w-8 cursor-pointer ${isMenuOpen && "isOpen"}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="absolute top-0 h-[3px] w-full rounded-full bg-white transition-all duration-500 group-[.isOpen]:top-1/2 group-[.isOpen]:-translate-y-1/2 group-[.isOpen]:rotate-45"></div>
        <div className="absolute left-1/2 top-1/2 h-[3px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-all duration-500 group-[.isOpen]:rotate-90 group-[.isOpen]:opacity-0"></div>
        <div className="absolute bottom-0 h-[3px] w-full rounded-full bg-white transition-all duration-500 group-[.isOpen]:bottom-1/2 group-[.isOpen]:translate-y-1/2 group-[.isOpen]:-rotate-45"></div>
      </div>

      {/* menu */}
      <ul
        className={`fixed left-0 top-[72px] z-[100] flex w-full flex-col gap-4 overflow-hidden bg-[var(--background)] p-9 backdrop-blur-lg ${isMenuOpen ? "h-screen" : "h-0 !p-0"} transition-all duration-700`}
      >
        <li>
          <a className="button-link" href={import.meta.env.VITE_DISCORD_LINK}>
            Discord
          </a>
        </li>
        <li>
          <a className="button-link" href={import.meta.env.VITE_GITHUB_LINK}>
            GitHub
          </a>
        </li>
        <li>
          <a className="button-link" href={import.meta.env.VITE_REDDIT_LINK}>
            Reddit
          </a>
        </li>
        <li>
          <button className="button-primary">Download</button>
        </li>
      </ul>
    </div>
  );
}
