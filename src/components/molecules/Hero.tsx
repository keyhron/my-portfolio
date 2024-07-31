import Image from "next/image";
import { FcCommandLine } from "react-icons/fc";
import { BsDownload } from "react-icons/bs";
import CardGlass from "@/components/atoms/CardGlass";
import Button from "@/components/atoms/Button";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse sm:grid sm:grid-cols-[calc(60%-12px)_40%] h-full gap-3">
      {/* Left side */}
      <div className="flex flex-col gap-3 h-full">
        <CardGlass
          className="p-8 xl:p-10 w-full flex flex-col justify-between h-full"
          classNameContainer="h-full"
          dotsPink
        >
          <div className="flex flex-col">
            <h1
              className={`font-urbanist font-bold text-lg xl:text-4xl text-slate-800 dark:text-slate-200 tracking-wide w-11/12`}
            >
              Hi, I&apos;m Juan, a web and mobile developer with 5 years of
              experience
            </h1>
            <p
              className={`font-foundation text-slate-500 dark:text-slate-400 mt-4 text-xs lg:text-base font-medium w-11/12`}
            >
              I&apos;m a big fan of web development and technology. I&apos;m
              passionate about working as a front end developer and I always
              make sure that what I develop is perfect. I&apos;m great at
              working in a team and I adjust to everything you need. I&apos;m a
              Senior Front End Developer with more than five year of work
              experience.
            </p>
            <p
              className={`font-foundation text-slate-500 dark:text-slate-400 mt-4 text-xs lg:text-base font-medium w-11/12`}
            >
              {/* I&apos;m 22 years old and I&apos;m from Venezuela.  */}
              If you are interested in seeing my Curriculum,{" "}
              <a
                href="/pdf/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white underline cursor-pointer"
              >
                you can download it down bellow
              </a>
            </p>
          </div>
          <div>
            <a href="/pdf/cv.pdf" target="_blank" rel="noopener noreferrer">
              <Button>
                <BsDownload className="mr-3" /> Download CV
              </Button>
            </a>
          </div>
        </CardGlass>
      </div>

      {/* Right side */}
      <div className="w-full h-full flex flex-col gap-3">
        <CardGlass className="px-3 py-3 xl:px-4 xl:py-3 flex items-center w-full text-sm xl:text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="stroke-slate-800 dark:stroke-slate-200"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 9l3 3l-3 3" />
            <path d="M13 15l3 0" />
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          </svg>
          <h2 className="font-urbanist font-bold text-xs lg:text-sm ml-3 text-slate-800 dark:text-slate-200">
            Front End Web and Mobile Developer
          </h2>
        </CardGlass>

        <div className="grid gap-3 grid-cols-2 w-full">
          <div className="w-full h-full bg-center bg-cover rounded-2xl">
            <Image
              className={`w-full h-full object-cover transition-all ease-out duration-[400ms] object-center rounded-2xl`}
              src="/images/profile.jpg"
              alt="profile"
              width={300}
              height={300}
              quality={90}
              priority={true}
            />
          </div>

          <div className="h-full w-full flex flex-col gap-3">
            <CardGlass
              className="px-4 py-3 xl:px-4 xl:py-5 flex w-full justify-between items-center"
              dotYellow
            >
              <h4 className="font-urbanist font-medium text-slate-400 text-xs lg:text-sm">
                Name:
              </h4>
              <h3 className="font-urbanist font-medium text-xs lg:text-sm text-slate-800 dark:text-slate-200">
                Juan Barrios
              </h3>
            </CardGlass>
            <CardGlass
              className="px-4 py-3 lg:px-4 lg:py-5 flex w-full justify-between items-center"
              dotBlue
            >
              <h4 className="font-urbanist font-medium text-slate-400 text-xs lg:text-sm">
                Age:
              </h4>
              <h3 className="font-urbanist font-medium text-xs lg:text-sm text-slate-800 dark:text-slate-200">
                23 years
              </h3>
            </CardGlass>
            <CardGlass
              className="w-full h-full px-4 py-3 lg:px-4 lg:py-5 flex flex-col items-center"
              classNameContainer="w-full h-full"
              dotRed
            >
              <div className="font-urbanist font-medium flex w-full justify-between items-center">
                <h4 className="text-slate-400 text-xs lg:text-sm">Based in:</h4>
                <h3 className="font-urbanist font-medium text-xs lg:text-sm text-slate-800 dark:text-slate-200">
                  Venezuela
                </h3>
              </div>
              <div className="flex items-center justify-center w-full h-full">
                <Image
                  src="/images/world.svg"
                  alt="World image"
                  width={250}
                  height={250}
                />
              </div>
            </CardGlass>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
