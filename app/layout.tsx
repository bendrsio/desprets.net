import type React from "react";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
export const metadata: Metadata = {
  title: "Benjamin Desprets | Full-Stack Developer",
  description: "Personal portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-mono">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div>{children}</div>
          <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-zinc-600 dark:text-gray-400 mt-20">
            <div className="container mx-auto px-4">
              <p>
                2024 - {new Date().getFullYear()} Benjamin Desprets. All rights
                reserved.
              </p>
              <p className="mt-2 text-sm">
                Built with Next.js and Tailwind CSS
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
