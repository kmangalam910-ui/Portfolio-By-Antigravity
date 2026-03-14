import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mangalam Kumar | Full Stack Developer",
  description: "Futuristic 4D Portfolio of Mangalam Kumar. Explore my skills, projects, and journey in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen bg-black text-white antialiased selection:bg-neon-cyan/30 selection:text-neon-cyan`}>
        {children}
      </body>
    </html>
  );
}
