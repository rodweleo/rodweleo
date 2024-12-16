
import Image from "next/image";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import Link from "next/link"

const SOCIAL_LINKS = [
  {
    icon: <Github size={18}/>, 
    name: "GitHub",
    href: "https://github.com/rodweleo"
  },
  {
    icon: <Linkedin size={18} className="mb-1"/>,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rodweleo"
  },
  {
    icon: <Mail size={18}/>,
    name: "Mail",
    href: "mailto:leorodwel86@gmail.com"
  }
]

export default function HeroSection(){
    return (
        <section id="#intro" className="grid place-items-center min-h-screen">
        <div className="w-fit space-y-5 flex flex-col items-center text-center">
          <h1 className="sm:text-6xl text-4xl">Innovator, Problem-Solver, Craftsman</h1>
          <p className="text-slate-800 text-md sm:text-lg">I leverage technology to solve problems and create value for businesses and individuals alike by creating useful digital products.</p>
          <Image 
            src="/images/IMG-20241215-WA0021.jpg"
            width={200}
            height={200}
            className="size-[200px] aspect-square rounded-full object-cover"
            alt="Rodwell Leo"
          />
          <ul className="flex items-center gap-5 text-lg ">
            {
              SOCIAL_LINKS.map((link) => (
              <li key={link.name}><Link href={link.href} className="flex items-center gap-2" target="_blank" title={link.name}>{link.icon} <span>{link.name}</span></Link></li>
              ))
            }
          </ul>
          <Image src="/images/hero-devices.svg" width={700} height={300} className="pt-20" alt="Hero Section Dev Tools"/>
        </div>
      </section>
    )
}