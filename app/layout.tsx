import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import Providers from "./components/providers/Providers";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import ChatBot from "./components/chatbot/ChatBot";
import ScrollProgress from "./components/ui/ScrollProgress";
import CursorGlow from "./components/ui/CursorGlow";
import LoadingScreen from "./components/ui/LoadingScreen";
import ClickRipple from "./components/ui/ClickRipple";
import PageTransition from "./components/ui/PageTransition";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
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
        className={`${roboto.variable} ${robotoMono.variable} antialiased bg-white dark:bg-[#0a0f1f] text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <Providers>
          <LoadingScreen />
          <ScrollProgress />
          <CursorGlow />
          <ClickRipple />
          <Navigation />
          <main className="min-h-screen">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <ChatBot />
        </Providers>
      </body>
    </html>
  );
}
