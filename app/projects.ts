// data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  technologies: string[];
  github: string;
  demo: string;
  fullDescription: string;
  images: string[];
}

export const projects = [
  {
    id: "1",
    title: "Emoji-Picker",
    description: "A unique take on the classic color picker",
    technologies: ["React", "Tailwind", "Railway", "TypeScript"],
    github: "https://github.com/bendrsio/emoji-color-picker",
    demo: "https://emoji.desprets.net/",
    fullDescription: `
      A unique take on color pickers, showing the emoji with the closest average RGB value.
    `,
    images: ["/Emoji-Color-Picker.png"],
  },
];
