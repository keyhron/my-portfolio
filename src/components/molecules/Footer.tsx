"use client";
import { useContext } from "react";
import { UserContext } from "@/contexts/useUserContext";
// Icons
import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

// Data
const contactInfo = [
  {
    href: "https://www.twitter.com/juanbs",
    Icon: FaXTwitter,
  },
  {
    href: "https://api.whatsapp.com/send?phone=584121556808&text=Hola,%20%C2%BFqu%C3%A9%20tal%20est%C3%A1s?,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20informaci%C3%B3n%20de%20tus%20servicios,%20por%20favor.",
    Icon: IoLogoWhatsapp,
  },
  {
    href: "mailto:juanbarrios045@gmail.com",
    Icon: BiLogoGmail,
  },
  {
    href: "https://www.github.com/ikeychron",
    Icon: BiLogoGithub,
  },
  {
    href: "https://www.linkedin.com/in/carlosbarrios045",
    Icon: BiLogoLinkedinSquare,
  },
];

const contactRight = [
  "Juanbarrios045@gmail.com",
  "+58412 - 1556808",
  "Portuguesa - Venezuela",
];

const Footer = () => {
  const { showAnimationFooter } = useContext(UserContext);

  return (
    <footer
      id="contact"
      className={`w-full h-60 xl:h-80 bg-footer bg-top bg-cover rounded-3xl shadow-lg mb-4 ${
        showAnimationFooter ? "vibrate scale-up-center" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between w-full mx-auto h-full py-10 px-14 xl:py-12 xl:px-20 bg-black bg-opacity-50 rounded-3xl">
        <nav>
          <ul className="flex gap-3">
            {contactInfo.map(({ href, Icon }) => (
              <li
                key={href}
                className={showAnimationFooter ? "rotate-center" : ""}
              >
                <a
                  href={href}
                  target="_blank"
                  className="text-white hover:text-pink-600"
                >
                  <Icon className="text-3xl xl:text-4xl" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ul className="flex flex-col gap-2">
            {contactRight.map((item) => (
              <li key={item}>
                <p className="text-white font-semibold text-sm xl:text-lg">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

