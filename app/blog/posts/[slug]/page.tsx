"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import AnimatedText from "@/components/animated-text";
import MarkdownRenderer from "@/components/markdown-renderer";

// Sample blog posts data
const blogPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    excerpt:
      "Learn how to build modern web applications with Next.js, React's framework for production.",
    date: "2023-04-15",
    readingTime: 5,
    categories: ["Web Development", "React", "Next.js"],
    content: `
      Next.js is a powerful React framework that enables you to build full-stack web applications with ease. It provides a great developer experience with features like server-side rendering, static site generation, and more.

      ## Why Next.js?

      - **Server-side Rendering**: Next.js allows you to render your React components on the server, which improves performance and SEO.
      - **Static Site Generation**: You can pre-render pages at build time, resulting in fast loading times and better user experience.
      - **API Routes**: Next.js provides a simple way to build API endpoints as part of your application.
      - **File-based Routing**: The routing system is based on the file system, making it intuitive and easy to understand.
      - **Built-in CSS Support**: Next.js has built-in support for CSS modules, Sass, and other styling solutions.

      ## Getting Started

      To create a new Next.js application, you can use the create-next-app command:

      \`\`\`
      npx create-next-app my-next-app
      cd my-next-app
      npm run dev
      \`\`\`

      This will set up a new Next.js project with a basic structure and start the development server.

      ## Pages and Routing

      In Next.js, each file in the pages directory becomes a route in your application. For example, pages/index.js corresponds to the / route, and pages/about.js corresponds to the /about route.

      ## Data Fetching

      Next.js provides several methods for fetching data:

      - **getStaticProps**: Fetch data at build time.
      - **getStaticPaths**: Specify dynamic routes to pre-render based on data.
      - **getServerSideProps**: Fetch data on each request.

      ## Conclusion

      Next.js is a powerful framework that makes it easy to build modern web applications. Its features like server-side rendering, static site generation, and API routes make it a great choice for building fast, SEO-friendly applications.
    `,
  },
  {
    slug: "understanding-typescript",
    title: "Understanding TypeScript for JavaScript Developers",
    excerpt:
      "A comprehensive guide to TypeScript and how it improves your JavaScript development experience.",
    date: "2023-05-22",
    readingTime: 8,
    categories: ["TypeScript", "JavaScript", "Web Development"],
    content: `
      TypeScript is a superset of JavaScript that adds static typing to the language. It helps catch errors early in the development process and provides better tooling for large-scale applications.

      ## Why TypeScript?

      - **Static Typing**: TypeScript allows you to define types for your variables, function parameters, and return values, which helps catch type-related errors at compile time.
      - **Better Tooling**: TypeScript provides better IDE support, including code completion, refactoring, and navigation.
      - **Enhanced Readability**: Types serve as documentation, making your code more readable and easier to understand.
      - **Safer Refactoring**: When you change your code, TypeScript helps ensure that you update all the necessary parts.

      ## Getting Started

      To start using TypeScript, you need to install it and set up a configuration file:

      \`\`\`
      npm install -g typescript
      tsc --init
      \`\`\`

      This will create a tsconfig.json file in your project, which you can customize to fit your needs.

      ## Basic Types

      TypeScript provides several basic types:

      - **string**: For textual data
      - **number**: For numeric values
      - **boolean**: For true/false values
      - **array**: For collections of values
      - **object**: For non-primitive types
      - **any**: For values of any type (use sparingly)

      ## Interfaces and Types

      TypeScript allows you to define custom types using interfaces and type aliases:

      \`\`\`typescript
      interface User {
        id: number;
        name: string;
        email: string;
        age?: number; // Optional property
      }

      type Point = {
        x: number;
        y: number;
      };
      \`\`\`

      ## Conclusion

      TypeScript is a powerful tool that can help you write more robust and maintainable JavaScript code. Its static typing system catches errors early and provides better tooling, making it a great choice for large-scale applications.
    `,
  },
  {
    slug: "tailwind-css-tips",
    title: "10 Tailwind CSS Tips to Improve Your Workflow",
    excerpt:
      "Practical tips and tricks to make the most out of Tailwind CSS in your projects.",
    date: "2023-06-10",
    readingTime: 6,
    categories: ["CSS", "Tailwind", "Web Development"],
    content: `
      Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. Here are 10 tips to help you make the most of Tailwind CSS in your projects.

      ## 1. Use the JIT Mode

      Tailwind CSS's Just-in-Time (JIT) mode generates styles on-demand, resulting in faster build times and smaller CSS files. Enable it in your tailwind.config.js:

      \`\`\`javascript
      module.exports = {
        mode: 'jit',
        // ...
      }
      \`\`\`

      ## 2. Leverage Arbitrary Values

      With JIT mode, you can use arbitrary values in your utility classes:

      \`\`\`html
      <div class="top-[117px] bg-[#bada55] content-['hello']">
        <!-- ... -->
      </div>
      \`\`\`

      ## 3. Create Component Classes with @apply

      Use the @apply directive to create reusable component classes:

      \`\`\`css
      .btn {
        @apply px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600;
      }
      \`\`\`

      ## 4. Use Variants for Different States

      Tailwind provides variants for different states like hover, focus, and responsive breakpoints:

      \`\`\`html
      <button class="bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
        Button
      </button>
      \`\`\`

      ## 5. Customize Your Theme

      Tailor Tailwind to your project by customizing the theme in your tailwind.config.js:

      \`\`\`javascript
      module.exports = {
        theme: {
          extend: {
            colors: {
              primary: '#3490dc',
              secondary: '#ffed4a',
              danger: '#e3342f',
            },
          },
        },
      }
      \`\`\`

      ## 6. Use Group Hover

      The group-hover variant allows you to style elements based on the hover state of a parent:

      \`\`\`html
      <div class="group">
        <h3 class="text-gray-700 group-hover:text-blue-500">Title</h3>
        <p class="text-gray-500 group-hover:text-gray-700">Description</p>
      </div>
      \`\`\`

      ## 7. Leverage the Space Between Utilities

      Use space-x and space-y utilities to add consistent spacing between elements:

      \`\`\`html
      <div class="space-y-4">
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>
      \`\`\`

      ## 8. Use the Container Component

      The container utility centers content and applies padding:

      \`\`\`html
      <div class="container mx-auto px-4">
        <!-- Content -->
      </div>
      \`\`\`

      ## 9. Optimize for Production

      Use PurgeCSS to remove unused styles in production:

      \`\`\`javascript
      module.exports = {
        purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        // ...
      }
      \`\`\`

      ## 10. Use Plugins to Extend Functionality

      Tailwind has a rich ecosystem of plugins that add new utilities:

      \`\`\`javascript
      module.exports = {
        plugins: [
          require('@tailwindcss/forms'),
          require('@tailwindcss/typography'),
        ],
      }
      \`\`\`

      ## Conclusion

      Tailwind CSS is a powerful framework that can significantly improve your workflow. By following these tips, you can make the most of Tailwind and build beautiful, responsive designs more efficiently.
    `,
  },
];

// Calculate reading time
const calculateReadingTime = (text: string) => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Animate sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".scroll-reveal");

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white font-mono">
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-emerald-400 hover:underline mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to all posts
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <AnimatedText
            text={post.title}
            className="text-4xl font-bold mb-4"
            typingSpeed={50}
            showCursor={false}
          />

          <div className="flex items-center space-x-4 text-zinc-600 dark:text-gray-400 text-sm mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {post.categories.map((category, index) => (
              <motion.span
                key={index}
                className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              >
                {category}
              </motion.span>
            ))}
          </div>

          <MarkdownRenderer content={post.content} />
        </motion.div>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-zinc-600 dark:text-gray-400 mt-20">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Benjamin Desprets. All rights reserved.
          </p>
          <p className="mt-2 text-sm">Built with Next.js and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
