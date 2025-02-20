export interface IProject {
  name: string;
  description: string;
  links: {
    github?: string;
    demo?: string;
  };
  image: string;
  login?: {
    email: string;
    password: string;
  };
}

export interface ICertificates {
  name: string;
  site: string;
  teacher: string;
  image: string;
  link: string;
}
