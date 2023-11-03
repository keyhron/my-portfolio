import Link from "next/link";

interface ICardImage {
  data: {
    text: string;
    bgImage: string;
    href: string;
    newTab: boolean;
  }[];
}

const CardImage = ({ data }: ICardImage) => {
  return (
    <section className="flex flex-col md:flex-row w-full my-6 xl:my-12 gap-3">
      {data.map(({ text, bgImage, href, newTab }) => (
        <Link
          href={href}
          target={newTab ? "_blank" : undefined}
          key={text}
          className={`group rounded-3xl ${bgImage} bg-center bg-cover w-full md:w-1/3 hover:md:w-8/12 h-20 lg:h-24 xl:h-40 hover:md:h-32 hover:xl:h-60 duration-[250ms] ease-in transition-all cursor-pointer shadow-lg `}
        >
          <div className="group bg-black bg-opacity-50 md:group-hover:bg-transparent duration-[250ms] ease-in transition-all w-full h-full flex items-center justify-center rounded-3xl">
            <div className="group bg-transparent md:group-hover:bg-white group-hover:shadow-lg duration-[250ms] ease-in transition-all py-2 px-4 flex items-center justify-center rounded-md">
              <h1
                className={`w-full ${bgImage} bg-center bg-cover bg-clip-text text-transparent text-md lg:text-lg xl:text-2xl tracking-wide uppercase text-center text-black underline brightness-[3] md:group-hover:brightness-50 duration-[250ms] ease-in transition-all`}
              >
                {text}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default CardImage;

