export interface IProject {
  name: string;
  description: string;
  links: {
    github?: string;
    demo?: string;
  };
  image: string;
  login?: {
    email: "correo@correo.com";
    password: "123123";
  };
}

export interface ICertificates {
  name: string;
  site: string;
  teacher: string;
  image: string;
  link: string;
}
