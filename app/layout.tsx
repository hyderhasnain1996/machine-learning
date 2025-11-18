import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./components/providers/Providers";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ChatBot from "./components/chatbot/ChatBot";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Machine Learning Lab | Jeju National University",
  description:
    "Machine Learning Lab at Department of Computer Engineering, Jeju National University. Research in AI, Machine Learning, Image Processing, Blockchain, and Deep Learning applications.",
  keywords: [
    "Machine Learning",
    "AI",
    "Artificial Intelligence",
    "Deep Learning",
    "Computer Vision",
    "Blockchain",
    "Jeju National University",
    "Research Lab",
  ],
  authors: [
    { name: "Dr. Yung-Cheol Byun", url: "mailto:yungcheolbyun@gmail.com" },
  ],
  openGraph: {
    title: "Machine Learning Lab | Jeju National University",
    description:
      "Research in AI, Machine Learning, Image Processing, and Blockchain at Jeju National University",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <Providers>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ChatBot />
        </Providers>
      </body>
    </html>
  );
}
