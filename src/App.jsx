import "./styles/App.css";

import Card from "./components/card";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Section from "./components/section";

import tilingWindows from "/svgs/tilingWindows.svg";
import minimalBase from "/svgs/minimalBase.svg";
import solidSoftware from "/svgs/solidSoftware.svg";


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
      description: "Axyl focuses fully on tiling WMs, so we can give you the best experience for advanced users.",
      bg: "#2E3440",
      children: null
    },
    {
      title: "Arch Linux tweak tool",
      description: "A versatile and powerful tool for customizing Arch-based systems with ease!",
      bg: "#1A1B26",
      children: null
    },
    {
      title: "CachyOS-Kernal",
      description: "CachyOS-Kernal is a lightweight and modular kernel for Arch based systems.",
      bg: "#1E222A",
      children: null
    },
    // {
    //   title: "Extended repositories",
    //   description: "lorem",
    //   bg: "#222526",
    //   children: null
    // },
    {
      title: "Yafti",
      description: "Responsible for installing Flatpaks on first boot after a user finishes installation. It is intended as a replacement for custom zenity dialogs.",
      bg: "#222526",
      children: null
    }
  ]
  
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Section title="What is Axyl?">
        {infoCards.map(({ title, description, bg, children }) => (
          <Card key={title} title={title} description={description} bg={bg || "transparent"}>
            {children}
          </Card>
        ))}
      </Section>
      <Section title="Features" description="Axyl provides a lot of features that you can use and save much time and work.">
        {featuresCards.map(({ title, description, bg, children }) => (
          <Card key={title} title={title} description={description} bg={bg || "transparent"}>
            {children}  
          </Card>
        ))}
      </Section>
    </div>
  );
}

export default App;
