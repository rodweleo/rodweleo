import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { TOOLS } from "@/utils/data";
import Image from "next/image";
import WordFadeIn from "@/components/magicui/word-fade-in";
import WorkExperienceList from "@/components/work-experience-list";
import ProjectsList from "@/components/projects-list";
import { NOTABLE_POJECTS } from "@/utils/data";
import { Button } from "@/components/ui/button";

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
      <section id="#intro" className="grid place-items-center h-screen">
        <div className="w-fit space-y-5 flex flex-col items-center text-center">
          <WordFadeIn className="sm:text-6xl text-4xl" words="Innovator, Problem-Solver, Craftsman" />
          <p className="text-slate-800 text-lg">I leverage technology to solve problems and create value for businesses and individuals alike by creating useful digital products.</p>
          <Image 
            src="/images/A Tech Enthusiastic Lion with the physicality parts of a human being.jpg"
            width={200}
            height={200}
            className="aspect-square rounded-full"
            alt="Rodwell Leo"
          />
          <ul className="flex items-center gap-5 text-lg ">
            {
              SOCIAL_LINKS.map((link) => (
              <li key={link.name}><Link href={link.href} className="flex items-center gap-2" target="_blank" title={link.name}>{link.icon} <span>{link.name}</span></Link></li>
              ))
            }
          </ul>
        </div>
      </section>
      <section id="about-me" className="py-24  bg-blue-200 ">
        <div className="container space-y-2.5 text-center max-w-4xl">
          <h1>Hi, I&apos;m Rodwell Leo. Nice to Meet You.</h1>
          <p className="text-slate-800 text-lg  w-full">At the end of 2022, I completed my course and fulltime got into building and scaling my own SaaS businesses. Previously, I <strong><u><a href="#education">pursued a degree in computer science</a></u></strong> , <strong><u><a href="#work-experience">interned at big tech companies</a></u></strong>, and <strong><u>competed in over 10 hackathons.</u></strong> I&apos;m quietly confident, naturally curious, and perpetually working on improving my skills.</p>
        </div>
      </section>

      <section id="work-experience" className="">
        <div className="container space-y-2 ">
          <h1 className="text-2xl font-bold text-center">Work Experience</h1>
          <WorkExperienceList />
        </div>
      </section>

      <section id="notable-projects">
        <div className="container gap-5 flex flex-col justify-between items-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p>Here are a few past design projects I&apos;ve worked on.</p>
          </div>
          <ProjectsList projects={NOTABLE_POJECTS.sort().slice(0, 3)} />
          <Link href="/projects" className="text-blue-500 w-fit border-2 font-bold border-blue-500 hover:font-bold hover:underline hover:text-white hover:bg-blue-500 transition-colors duration-200 px-20 py-3 rounded-full  ">View All</Link>
        </div>
      </section>
      
      <section>
        <div className="container space-y-2.5">
          <h1 className="text-center">Languages & Tools</h1>
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
       </div>
      </section>

      <section className="bg-gray-800 w-full">
        <div className="container py-20 text-center space-y-5">
          <p className="text-white sm:text-4xl text-2xl">Start a Project</p>
          <p className="text-slate-300">Interested in working together? We should queue up a time to chat.</p>
          <Button className="rounded-full px-10 py-6 hover:text-blue-500 bg-blue-500 hover:bg-transparent text-white hover:border-2 hover:border-blue-500 font-bold"><Link href="/contact">Start a Conversation</Link></Button>
        </div>
      </section>
    </main>
  );
}
