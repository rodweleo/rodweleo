
import Image from "next/image";
import { Github, Linkedin, Mail, } from "lucide-react";
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6";
import { SocialLinkBadge } from "./social-link-badge";
import { LiaTelegram } from "react-icons/lia";

const SOCIAL_LINKS = [
  {
    icon: <Github size={18} />,
    name: "GitHub",
    href: "https://github.com/rodweleo"
  },
  {
    icon: <Linkedin size={18} className="mb-1" />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rodweleo"
  },
  {
    icon: <FaXTwitter size={18} />,
    name: "Twitter",
    href: "https://x.com/rodweleo"
  },
  {
    icon: <Mail size={18} />,
    name: "Mail",
    href: "mailto:leorodwel86@gmail.com"
  },
  {
    icon: <LiaTelegram size={18} />,
    name: "Telegram",
    href: "https://t.me/rodweleo"
  }


]

export default function HeroSection() {
  return (
    <section id="#hero">
      <div className="w-full max-w-4xl space-y-5 flex flex-col">
        <Image
          src="/images/IMG-20241215-WA0021.jpg"
          width={100}
          height={100}
          className="size-[100px] aspect-square rounded-full object-cover"
          alt="Rodwell Leo"
        />
        <h1 className="sm:text-6xl text-4xl">Software Engineer, Innovator & Problem-Solver</h1>
        <p className="text-slate-800 text-md sm:text-lg">I leverage technology to solve problems and create value for businesses and individuals alike by creating useful digital products. Let&apos;s work together to build something amazing</p>

        <ul className="flex flex-wrap items-center gap-5 text-lg ">
          {
            SOCIAL_LINKS.map((link) => (
              <li key={link.name}><Link href={link.href} target="_blank" title={link.name}>
                <SocialLinkBadge link={link} />
              </Link></li>
            ))
          }
        </ul>
      </div>
    </section >
  )
}