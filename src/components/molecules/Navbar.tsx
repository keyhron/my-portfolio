"use client";
import { useContext, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import { Edu_NSW_ACT_Foundation } from "next/font/google";
import { FiMoon, FiSun } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import Menu from "./Menu";
import { nav } from "@/data/nav";
import { UserContext } from "@/contexts/useUserContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const { themeMode, toggleTheme, handleShowAnimFooter } =
    useContext(UserContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between px-5 w-full h-14 items-center max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto relative">
        <div className="text-sm lg:text-md font-medium p-2 text-slate-400 rounded-lg flex">
          <Link href="/">Welcome to my portfolio!</Link>
          <div className="levitate ml-1">🛸</div>
        </div>
        <div className="flex items-center justify-center">
          <ul className="hidden space-center gap-1 mr-4 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={
                    item.href === "#contact" ? handleShowAnimFooter : undefined
                  }
                  /* TODO: Each link must has a different color */
                  className={`text-sm lg:text-md font-medium px-3 py-2 hover:text-slate-900 hover:dark:text-slate-100 flex items-center ${
                    item.href === pathname ? "text-pink-500" : "text-slate-400"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleTheme}
            className=" text-slate-400 hover:text-slate-900 hover:dark:text-slate-100 mr-3"
          >
            {themeMode === "dark" ? <FiMoon /> : <FiSun />}
          </button>
          <button
            onClick={toggleMenu}
            className="h-6 w-6 hover:dark:text-slate-100 bg-slate-900 dark:bg-slate-200 rounded-full flex flex-col items-center justify-center md:hidden"
          >
            {isOpen ? (
              <IoCloseOutline
                className="text-white dark:text-black"
                size={18}
              />
            ) : (
              <>
                <div className="h-[1px] w-[10px] bg-white dark:bg-black mb-[2px]" />
                <div className="h-[1px] w-[10px] bg-white dark:bg-black" />
              </>
            )}
          </button>
        </div>
        <Menu isOpen={isOpen} handleClose={toggleMenu} />
      </nav>

      <div className="bg-black dark:bg-white h-10 xl:h-14 flex items-center justify-center mb-4 xl:mb-10">
        <p
          className={`font-foundation text-slate-200 dark:text-slate-800 text-sm xl:text-xl`}
        >
          Looking for a front end web or mobile developer?
        </p>
      </div>
    </>
  );
};

export default Navbar;
