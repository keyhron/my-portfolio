import { IProject } from "@/interfaces";

export const projects: IProject[] = [
  {
    name: "Young Awards",
    description:
      "It is a app for a church to vote for nominees and determine a winner reading the votes made with Next 15, Tailwind 4 and Firebase.",
    links: {
      demo: "https://premios-juventud.vercel.app",
    },
    image: "/images/projects/premios-juventud.png",
  },
  {
    name: "Guanare Market",
    description:
      "It is an application web made with Next, it is an E-commerce where you can see the products that people sell in your city, it has a map and many other functions, for now it is only design, and it is currently under development.",
    links: {
      demo: "https://guanare-market.vercel.app/",
    },
    image: "/images/projects/guanare-market.png",
  },
  {
    name: "Guanare Market Dashboard",
    description:
      "It is an application made with Next, it goes together with the Guanare Market application, in this you can manage the products you sell and the information of your company, for now it is only design, and it is currently under development.",
    login: {
      email: "Type any email",
      password: "Type anything",
    },
    links: {
      demo: "https://guanare-market-dashboard.vercel.app/",
    },
    image: "/images/projects/guanare-market-dashboard.png",
  },
  {
    name: "Guanare Market App",
    description:
      "It is an application mobile made with Flutter, it is an E-commerce where you can see the products that people sell in your city, it has a map and many other functions, for now it is only design, and it is currently under development.",
    links: {
      demo: "https://drive.google.com/file/d/13h5nHhfzIddWEq5ejMQh4MnGvPZBBTZC/view?usp=share_link",
    },
    image: "/images/projects/guanare-market-mobile.jpeg",
  },
  {
    name: "Firebase App",
    description:
      "It is a basic ecommerce made with Next and Firebase, with this app you can sell your products, vote for the one you like and add comments, create your account and you can create your products. You can search by name.",
    links: {
      github: "https://github.com/CarlosBarrios045/firebase-app",
      demo: "https://firebase-app-next.vercel.app/",
    },
    image: "/images/projects/firebase.png",
  },
  {
    name: "Bibliostore",
    description:
      "It is an application which deals with a library made with React and Firebase. In it you can create, edit and delete subscribers which are the book requesters, as well as create, edit and delete books. In summary, it is a library application.",
    login: {
      email: "correo@correo.com",
      password: "123123",
    },
    links: {
      github: "https://github.com/CarlosBarrios045/bibliostore",
      demo: "https://bibliostore-react.netlify.app/",
    },
    image: "/images/projects/bibliostore.PNG",
  },
  {
    name: "Memory Game",
    description: "It is the traditional memory game made with React",
    links: {
      github: "https://github.com/CarlosBarrios045/memorias-react",
      demo: "https://memorias-react.netlify.app/",
    },
    image: "/images/projects/memorias.png",
  },
  {
    name: "Cryptocurrency",
    description:
      "It is a Cryptocurrency quote, where you choose the currency of your country (or the one you want), select the cryptocurrency to quote and then you will have your quote. It was made with React Hooks, and the Crypto Compare API.",
    links: {
      github: "https://github.com/CarlosBarrios045/Criptomonedas",
      demo: "https://cripto-react.netlify.app/",
    },
    image: "/images/projects/criptomonedas.png",
  },
];
