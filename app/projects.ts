// data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  screenshot?: string;
  technologies: string[];
  github?: string;
  link?: string;
  fullDescription?: string;
  images: string[];
}

export const projects = [
  {
    id: "1",
    title: "Fundamental (Ongoing)",
    description: "The easiest wallet in the world!",
    technologies: ["React-Native", "Tailwind", "TypeScript", "Crypto"],
    github: "https://github.com/fdmntl/fundamental-app",
    link: "https://www.fundamentalwallet.com/",
    fullDescription: `
    # Origin
    I founded Fundamental with 5 classmates in 2024 as part of Epitech's [EIP Program](https://experience.epitech.eu/).  
    We recognized DeFi's immense potential and value to the world, but realized existing apps were either far too complex to become mainstream or compromised on the core principle of decentralization.  
    # Mission
    That's why our mission at Fundamental is to make the easiest wallet in the world, without ever compromising on our values of decentralization and security.`,
    images: ["/Fundamental.jpeg"],
  },
  {
    id: "2",
    title: "Emoji-Picker",
    description: "A unique take on the classic color picker",
    technologies: ["React", "Tailwind", "Railway", "TypeScript"],
    github: "https://github.com/bendrsio/emoji-color-picker",
    link: "https://emoji.desprets.net/",
    fullDescription: `
      A unique take on color pickers, showing the emoji with the closest average RGB value.
    `,
    images: ["/Emoji-Color-Picker.png"],
  },
];
