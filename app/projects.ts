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
    I founded Fundamental with 5 classmates in 2024 with the goal of creating the easiest crypto wallet in the world.
    ## Mission
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    ## Vision
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    ## Values
    - **Simplicity**: We believe that simplicity is the key to user experience. Our wallet is designed to be intuitive and easy to use, even for those who are new to crypto.
    - **Security**: We take security seriously. Our wallet uses the latest encryption technology to keep your assets safe.
    - **Transparency**: We believe in transparency and honesty. We are committed to providing our users with clear and accurate information about our wallet and its features.
    - **Community**: We believe in the power of community. We are building a community of users who can share their experiences and help each other navigate the world of crypto.
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
