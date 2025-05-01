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
    # Fundamental
    ## Origin
    I founded Fundamental with 5 classmates in 2024 as part of Epitech's [EIP Program](https://experience.epitech.eu/).
    ## Mission
    Our mission is to make crypto accessible to everyone, regardless of their technical background. We believe that crypto has the potential to revolutionize the way we think about money and finance, and we want to be at the forefront of that revolution.
`,
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
