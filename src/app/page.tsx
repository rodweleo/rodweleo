
import Link from "next/link";
import { TOOLS } from "@/utils/data";
import Image from "next/image";
import WorkExperienceList from "@/components/work-experience-list";
import { Button } from "@/components/ui/button";
import NotableProjectsSection from "@/components/notable-projects-section";
import TestimonialsSection from "@/components/testimonials-section"
import {Separator} from "@/components/ui/separator"
import HeroSection from "@/components/hero-section"
import { MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <main className="space-y-10">
      
      <HeroSection/>

      <section id="about-me" className="py-24  bg-blue-200 ">
        <div className="container space-y-2.5 text-center max-w-4xl">
          <h1>Hi, I&apos;m Rodwell Leo. Nice to Meet You.</h1>
          <p className="text-slate-800 text-lg  w-full">At the end of 2022, I completed my course and fulltime got into building and scaling my own SaaS businesses. Previously, I <strong><u><a href="#education">pursued a degree in computer science</a></u></strong> , <strong><u><a href="#work-experience">interned at big tech companies</a></u></strong>, and <strong><u>competed in over 10 hackathons.</u></strong> I&apos;m quietly confident, naturally curious, and perpetually working on improving my skills.</p>
        </div>
      </section>

      <section id="work-experience" className="">
        <div className="container space-y-2 ">
          <h1 className="text-4xl font-bold text-center">Here&apos;s where I&apos;ve worked at</h1>
          <WorkExperienceList />
        </div>
      </section>

      <NotableProjectsSection/>
      
      <Separator/>

      <section id="language&tools" className="py-12">
        <div className="container space-y-10">
          <h1 className="text-center">Languages & Tools</h1>
          <div className="w-full grid place-items-center">
            <ul id="languages&tools" className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 w-fit place-items-center">
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
       </div>
      </section>

      <Separator/>

      <TestimonialsSection/>

      <Separator/>

      <section className="w-full">
        <div className="container py-20 text-center space-y-5">
          <p className=" sm:text-4xl text-2xl font-bold">Interested in collaborating with me?</p>
          <p className="text-neutral-800">I&apos;m always open to discussing product design work or partnership opportunities.</p>
          <Button className="rounded-full px-10 py-6 hover:text-blue-500 bg-blue-500 hover:bg-transparent text-white hover:border-2 hover:border-blue-500 font-bold"><Link href="/contact" className="flex items-center gap-2.5"> <MessageSquare/> <span>Start a Conversation</span> </Link></Button>
        </div>
      </section>
    </main>
  );
}
