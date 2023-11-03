import CardGlass from "@/components/atoms/CardGlass";
import Container from "@/components/atoms/Container";
import Navbar from "@/components/molecules/Navbar";
import Footer from "@/components/molecules/Footer";
import CardImage from "@/components/molecules/CardImage";
import Hero from "@/components/molecules/Hero";

import { technologiesLearn, technologiesMain } from "@/data/tech";

const cards = [
  {
    text: "Hire me",
    bgImage: "bg-laptop",
    href: "https://api.whatsapp.com/send?phone=584121556808&text=Hola,%20%C2%BFqu%C3%A9%20tal%20est%C3%A1s?,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20informaci%C3%B3n%20de%20tus%20servicios%20por%20favor.",
    newTab: true,
  },
  {
    text: "All my projects",
    bgImage: "bg-hire",
    href: "/projects",
    newTab: false,
  },
  {
    text: "All my certificates",
    bgImage: "bg-certificates",
    href: "/certificates",
    newTab: false,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <Container>
        {/* First section */}
        <Hero />

        <CardGlass
          className="p-8 xl:p-10 justify-between w-full flex flex-col"
          classNameContainer="mt-3"
        >
          <div className="flex flex-col gap-3">
            <p
              className={`font-foundation text-slate-800 dark:text-white mb-3 text-xs xl:text-lg font-medium`}
            >
              My main languages are:
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {technologiesMain.map(({ Icon, bgColor, name }) => (
                <div
                  key={name}
                  style={{ backgroundColor: bgColor }}
                  className="flex rounded-lg gap-2 py-1 px-3 xl:py-2 xl:px-6 w-auto text-white items-center justify-center text-[10px] lg:text-lg"
                >
                  <Icon />
                  <p className="font-foundation">{name}</p>
                </div>
              ))}
            </div>

            <p
              className={`font-foundation text-slate-800 dark:text-white mb-3 text-xs xl:text-lg font-medium`}
            >
              And I am currently learning:
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {technologiesLearn.map(({ Icon, bgColor, name }) => (
                <div
                  key={name}
                  style={{ backgroundColor: bgColor }}
                  className="flex rounded-lg gap-2 py-1 px-3 xl:py-2 xl:px-6 w-auto text-white items-center justify-center text-[10px] lg:text-lg"
                >
                  <Icon />
                  <p className="font-foundation">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </CardGlass>

        {/* Second section */}
        <CardImage data={cards} />

        <Footer />
      </Container>
    </>
  );
}

