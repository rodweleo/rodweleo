import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Particles from "@/components/magicui/particles";
import MainFooter from "@/components/main-footer";
import { Separator } from "@/components/ui/separator";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Providers from "@/components/providers";
import { Toaster } from 'react-hot-toast';
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: 'Rodwell Leo - Software Engineer',
  description: 'Experienced software engineer showcasing a diverse portfolio of projects and expertise in web and mobile application development. Explore my skills, achievements, and passion for creating innovative solutions.',
  keywords: 'software engineer, web development, mobile app development, programming, software projects, coding, technology, software solutions, full stack development',
  verification: {
    google: "L81ikmziYYtxdmoP4QGgHDejqk7v3NXbcJS3yJPpOdc"
  }
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/images/logo.png" />
      </head>
      <body className={inter.className}>
        <Particles
          className="fixed h-screen -z-50 w-full inset-0"
          quantity={100}
          ease={50}
          color="#000000"
          refresh
          staticity={20}
          size={2}
        />
        <Providers>
          <Navigation/>
          <main className="container py-10 min-h-screen">
            {children}
          </main>
          <Separator />
          <MainFooter />
          <Toaster />
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
