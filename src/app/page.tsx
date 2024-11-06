import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { TOOLS } from "@/utils/data";
import Image from "next/image";
import WordFadeIn from "@/components/magicui/word-fade-in";
import WorkExperienceList from "@/components/work-experience-list";
import ProjectsList from "@/components/projects-list";
import { NOTABLE_POJECTS } from "@/utils/data";

export const revalidate = 0


const SOCIAL_LINKS = [
  {
    icon: <Github />, 
    name: "GitHub",
    href: "https://github.com/rodweleo"
  },
  {
    icon: <Linkedin />,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rodweleo"
  },
  {
    icon: <Mail />,
    name: "Mail",
    href: "mailto:leorodwel86@gmail.com"
  }
]
export default function Home() {
  return (
    <main className="space-y-10">
      <section id="#intro" className="grid place-items-center">
        <div className="w-fit space-y-2">
          <WordFadeIn className="text-4xl" words="Hi, I'm Rodwell Leo &#128075;" />
          <p className="text-slate-500 text-lg">A Software Engineer driven by a passion for software craftsmanship and product innovation, leveraging technology to solve problems and create value for businesses and individuals alike by creating beautiful and functional digital products.</p>
          <ul className="flex items-center gap-5 text-lg ">
            {
              SOCIAL_LINKS.map((link) => (
              <li key={link.name}><Link href={link.href} className="flex items-center gap-2" target="_blank" title={link.name}>{link.icon} <span>{link.name}</span></Link></li>
              ))
            }
          </ul>
        </div>
      </section>
      <section id="about-me" className="space-y-2.5">
        <header className="space-y-2">
          <h1 className="font-bold text-2xl">About Me</h1>
        </header>
        <div>
          <p className="text-slate-500 text-lg">At the end of 2022, I completed my course and fulltime got into building and scaling my own SaaS businesses. Previously, I <strong><u><a href="#education">pursued a degree in computer science</a></u></strong> , <strong><u><a href="#work-experience">interned at big tech companies</a></u></strong>, and <strong><u>competed in over 10 hackathons.</u></strong></p>
        </div>
      </section>

      <section id="work-experience" className="space-y-2">
        <h1 className="text-2xl font-bold">Work Experience</h1>
        <WorkExperienceList />
      </section>

      <section id="notable-projects" className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Link href="/projects" className="text-blue-500 hover:font-bold hover:underline transition-colors duration-200">View All</Link>
        </div>
        <ProjectsList projects={NOTABLE_POJECTS.sort().slice(0, 2)} />
      </section>
      
      <section className="space-y-2.5">
        <h1 className="font-bold text-2xl">Languages & Tools</h1>
        <ul id="languages&tools" className="flex flex-wrap gap-10">
          {
            TOOLS.map((tool) => (
              <li key={tool.name}>
                <div className="grid grid-cols-1 place-items-center">
                  <Image src={tool.thumbnail} alt={tool.name} width={50} height={50} />
                  <p className="font-medium text-lg">{tool.name}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </main>
  );
}
