import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNav from "@/components/main-nav";
import Image from "next/image";
import Particles from "@/components/magicui/particles";
const inter = Inter({ subsets: ["latin"] });
import Link from "next/link";
import MainFooter from "@/components/main-footer";
import { Separator } from "@/components/ui/separator";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Rodwell Leo - Software Engineer',
  description: 'Experienced software engineer showcasing a diverse portfolio of projects and expertise in web and mobile application development. Explore my skills, achievements, and passion for creating innovative solutions.',
  keywords: 'software engineer, web development, mobile app development, programming, software projects, coding, technology, software solutions, full stack development',
  verification: {
    google: "L81ikmziYYtxdmoP4QGgHDejqk7v3NXbcJS3yJPpOdc"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/images/logo.png" />
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
          <header className="shadow-md sticky top-0 z-50 bg-white/70 backdrop-blur-md">
            <section className="flex items-center container justify-between p-5">
            <Link href="/" className="flex items-center gap-2"> <h1 className="text-lg font-semibold tracking-wide text-blue-500"><span className=" font-bold">{'<'}</span>Rodwell Leo<span className="font-bold">{'/>'}</span></h1></Link>
              <MainNav />
            </section>
          </header>
          <main className="py-10 min-h-screen">
            {children}
          </main>
          <Separator />
          <MainFooter />
          <SpeedInsights />
          <Analytics />
      </body>
    </html>
  );
}
