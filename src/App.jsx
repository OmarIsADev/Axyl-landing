import "./styles/App.css";

import Card from "./components/card";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Section from "./components/section";

import tilingWindows from "/svgs/tilingWindows.svg";
import minimalBase from "/svgs/minimalBase.svg";
import solidSoftware from "/svgs/solidSoftware.svg";
import arch from "/svgs/archlinux.svg";
import hyprland from "/svgs/hyprland.svg";
import cachyos from "/svgs/cachyOS.svg";
import ublue from "/ublue.png";
import terminal from "/svgs/terminal.svg";
import discord from "/svgs/discord.svg";
import github from "/svgs/github.svg";

import aarch from "/sponsor/aarch.png";
import arco from "/sponsor/arco-linux.png";
import foss from "/sponsor/foss-host.png";

import githubUsers from "/github-users.png";
import discordServer from "/discord-server.png";

const svgsClassName =
  "absolute -bottom-5 -left-5 rotate-[-20deg] h-24 w-24 grayscale";

function App() {
  const infoCards = [
    {
      title: "Tiling Windows",
      description:
        "Axyl focuses fully on tiling WMs, so we can give you the best experience for advanced users.",
      children: (
        <img
          className="absolute bottom-0 w-full max-w-xl self-center px-9"
          src={tilingWindows}
        />
      ),
    },
    {
      title: "Minimal Base",
      description:
        "Built on Arch Linux, Axyl follows the KISS principles, keeping the base system minimal yet flexible.",
      bg: "#101010",
      children: (
        <img
          className="absolute bottom-0 w-full max-w-xl self-center px-9"
          src={minimalBase}
        />
      ),
    },
    {
      title: "Solid Software",
      description:
        "This distro comes with your favorite programs like Alacritty, Polybar and NvChad.",
      bg: "#171717",
      children: (
        <img
          className="absolute bottom-0 w-full self-center"
          src={solidSoftware}
        />
      ),
    },
  ];

  const featuresCards = [
    {
      title: "Hyprland",
      description:
        "Axyl focuses fully on tiling WMs, so we can give you the best experience for advanced users.",
      bg: "#2E3440",
      children: <img className={svgsClassName} alt="hyprland" src={hyprland} />,
    },
    {
      title: "Arch Linux tweak tool",
      description:
        "A versatile and powerful tool for customizing Arch-based systems with ease!",
      bg: "#1A1B26",
      children: <img className={svgsClassName} alt="archlinux" src={arch} />,
    },
    {
      title: "CachyOS-Kernel",
      description:
        "CachyOS-Kernal is a lightweight and modular kernel for Arch based systems.",
      bg: "#1E222A",
      children: (
        <img className={svgsClassName} alt="CachyOS-Kernel" src={cachyos} />
      ),
    },
    {
      title: "Yafti",
      description:
        "Responsible for installing Flatpaks on first boot after a user finishes installation. It is intended as a replacement for custom zenity dialogs.",
      bg: "#222526",
      children: <img className={svgsClassName} alt="Yafti" src={ublue} />,
    },
    {
      title: "AGS",
      description:
        "AGS allows defining GTK widgets in declarative way, It also provides services and other utilities to interact with the system to make widgets more functional and user-friendly.",
      bg: "#1A1B26",
      children: <img className={svgsClassName} alt="AGS" src={terminal} />,
    },
  ];

  return (
    <div className="">
      <Navbar />
      <Hero />

      {/* Thesis */}
      <Section title="What is Axyl?">
        {infoCards.map(({ title, description, bg, children }) => (
          <Card
            key={title}
            title={title}
            description={description}
            bg={bg || "transparent"}
          >
            {children}
          </Card>
        ))}
      </Section>

      {/* Features */}
      <Section
        title="Features"
        description="Axyl provides a lot of features that you can use and save much time and work."
      >
        {featuresCards.map(({ title, description, bg, children }) => (
          <Card
            key={title}
            title={title}
            description={description}
            bg={bg || "transparent"}
          >
            {children}
          </Card>
        ))}
      </Section>

      {/* Join us */}
      <Section
        title="Join Us!"
        classNames={{
          wrapper: "!grid-cols-1 !p-9",
          header: "lg:!text-start lg:!items-start",
        }}
      >
        <div className="flex w-full gap-6 flex-wrap">
          <Card
            title="GitHub"
            description="A tiling window manager that represents a full binary tree."
          >
            <a
              href={import.meta.env.VITE_GITHUB}
              className="button-primary h-fit px-8 py-4"
            >
              Check out our repo
            </a>
            <img
              className="absolute -bottom-4 -left-8 -z-10 w-full max-w-64 self-center px-8 py-4"
              alt="GitHub Logo"
              src={github}
            />
            <img
              alt="GitHub users"
              className="absolute -bottom-4 -right-8 -z-10 w-full max-w-64 self-center grayscale"
              src={githubUsers}
            />
          </Card>
          <Card
            title="Discord"
            description="Axyl focuses fully on tiling WMs, so we can give you the best experience for advanced users."
          >
            <a
              href={import.meta.env.VITE_DISCORD}
              className="button-primary h-fit px-8 py-4"
            >
              Discord community
            </a>
            <img
              className="absolute -bottom-4 -left-8 -z-10 w-full max-w-48 self-center"
              alt="Discord Logo"
              src={discord}
            />
            <img
              alt="Discord Server"
              className="absolute -bottom-24 -right-24 -z-10 w-full max-w-48 rotate-[30deg] self-center grayscale"
              src={discordServer}
            />
          </Card>
        </div>
      </Section>

      <section className="flex flex-col items-center gap-6 border-b border-t border-[var(--border)] p-9">
        <h1 className="text-2xl font-bold text-[var(--text)]">
          Our Supporters
        </h1>
        <div className="flex w-full justify-center gap-9 flex-wrap">
          <img
            src={arco}
            alt="arco"
            className="h-full max-h-24 w-fit grayscale transition duration-700 hover:grayscale-0 object-contain"
          />
          <img
            src={foss}
            alt="foss"
            className="h-full max-h-24 w-fit grayscale transition duration-700 hover:grayscale-0 object-contain"
          />
          <img
            src={aarch}
            alt="aarch"
            className="h-full max-h-24 w-fit grayscale transition duration-700 hover:grayscale-0 object-contain"
          />
        </div>
      </section>

      <section className="mb-64 flex flex-col items-center justify-center gap-9 border-b border-t border-[var(--border)] p-9">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text)]">
            Want to boost your workflow?
          </h1>
          <p className="max-w-md text-pretty text-center text-[var(--light-text)]">
            Join the thousand people who have downloaded Axyl. Try it now in a
            live ISO - no need to install.
          </p>
        </div>
        <button className="button-primary h-fit px-8 py-4">Download Now</button>
      </section>
    </div>
  );
}

export default App;
