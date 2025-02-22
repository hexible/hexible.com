import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppData } from "@/src/data/app.data";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${AppData.name}: ${AppData.taglinePart1}, ${AppData.taglinePart2}`,
  description: AppData.longDescription,
  alternates: {
    canonical: AppData.publicUrl,
  },
  keywords: AppData.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${spaceGrotesk.className}`}>
        {children}
      </body>
    </html>
  );
}
