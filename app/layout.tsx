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
        </ThemeProvider>
      </body>
    </html>
  );
}
