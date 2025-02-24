import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppData, url } from "@/data/app.data";

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${AppData.name}: ${AppData.taglinePart1}, ${AppData.taglinePart2}`,
  description: AppData.shortDescription,
  alternates: {
    canonical: AppData.publicUrl,
  },
  keywords: AppData.keywords,
  openGraph: {
    title: AppData.name,
    description: AppData.shortDescription,
    siteName: AppData.name,
    url: AppData.publicUrl,
    type: "website",
    images: [
      {
        url: url("/content/cover-default.jpg"),
        width: 1200,
        height: 630,
        alt: AppData.name,
      },
    ],
  },
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
