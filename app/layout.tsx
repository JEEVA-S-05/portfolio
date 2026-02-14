import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern 3D Portfolio | Your Name",
  description: "A cutting-edge portfolio showcasing my work with stunning 3D graphics, animations, and modern web technologies.",
  keywords: ["portfolio", "web developer", "3D graphics", "React", "Next.js", "Three.js"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Modern 3D Portfolio",
    description: "Explore my portfolio featuring innovative web projects and stunning 3D visualizations",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
