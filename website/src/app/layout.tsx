import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Game Nexus | Next-Gen Game & App Hosting",
  description:
    "Deploy game servers and applications in seconds. Powered by GameCP — the most advanced hosting control panel for gamers, developers, and communities.",
  keywords: [
    "game hosting",
    "game server hosting",
    "app hosting",
    "minecraft server",
    "game panel",
    "GameCP",
    "cloud gaming",
    "dedicated servers",
  ],
  openGraph: {
    title: "Game Nexus | Next-Gen Game & App Hosting",
    description:
      "Deploy game servers and applications in seconds. Powered by GameCP.",
    url: "https://gamenex.us",
    siteName: "Game Nexus",
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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
