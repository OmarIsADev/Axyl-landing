import Dropdown from "./dropdown";
import logo from "/axyl-logo.svg";

export default function Navbar() {
  return (
    <nav className="fixed z-50 flex h-[72px] backdrop-blur-lg w-full items-center justify-between bg-[var(--transparent-background)]">
      {/* logo */}
      <div className="flex w-1/3 items-center gap-2 px-9 lg:pl-16 lg:pr-0">
        <img src={logo} alt="logo" />
        <p className="text-2xl font-semibold leading-6 text-[var(--text)]">
          AXYL
        </p>
      </div>
      {/* links */}
      <div className="hidden w-1/3 items-center justify-center gap-4 lg:flex">
        <a className="button-link">Discord</a>
        <a className="button-link">GitHub</a>
      </div>
      {/* download button */}
      <div className="hidden w-1/3 justify-end lg:flex">
        <button className="button-primary">Download</button>
      </div>
      <Dropdown />
    </nav>
  );
}
