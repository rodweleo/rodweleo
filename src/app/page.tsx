import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { TOOLS } from "@/utils/data";
import Image from "next/image";
import WordFadeIn from "@/components/magicui/word-fade-in";
import supabaseClient from "@/utils/supabase/server";
export default async function Home() {
  const { data, error } = await supabaseClient.from("work-experience").select("*")

  return (
    <main className="space-y-10">
      <section id="#intro" className="grid place-items-center">
        <div className="w-fit space-y-2">
          <WordFadeIn className="text-4xl" words="Hi, I'm Rodwell Leo &#128075;" />
          <p className="text-slate-500 text-lg">A Software Engineer driven by a passion for software craftsmanship and product innovation, leveraging technology to solve problems and create value for businesses and individuals alike by creating beautiful and functional digital products.</p>
          <ul className="flex items-center gap-5 text-xl">
            <li><Link href="https://github.com/rodweleo" target="_blank" title="Github"><Github /></Link></li>
            <li><Link href="https://www.linkedin.com/in/rodweleo/" target="_blank" title="LinkedIn"><Linkedin /></Link></li>
            <li><Link href="mailto:leorodwel86@gmail.com" title="Send a mail"><Mail /></Link></li>
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
        <div className='space-y-2.5'>
          {data ? <Accordion type="single" collapsible className="w-full">
            {data ? data.map((experience, index: number) => (
              <AccordionItem key={experience.company} value={`item ${index}`}>
                <AccordionTrigger>
                  <div className="flex flex-col items-start">
                    <h1 className="text-xl font-bold">{experience.title}</h1>
                    <p className="text-slate-500 text-md">{experience.company}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <h3 className="font-medium text-lg">Achievements</h3>
                  <ul className="list-disc ml-5">
                    {experience.achievements && experience.achievements.map((achievement: string) => {
                      return <li key={achievement}><p className="text-lg text-slate-500">{achievement}</p></li>;
                    })}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )) : null}
          </Accordion> : null}
          {error ? <p className='bg-red-100 text-red-500 px-2.5 py-5 rounded-lg'>Failed to fetch work experience data. <Button variant="link">Try Again</Button></p> : null}
        </div>
      </section>

      <section className="space-y-2.5">
        <h1 className="font-bold text-2xl">Languages & Tools</h1>
        <ul id="languages&tools" className="flex flex-wrap gap-10">
          {
            TOOLS.map((tool) => (
              <li key={tool.name}>
                <div className="grid grid-cols-1 place-items-center">
                  <Image src={tool.thumbnail} alt={tool.name} width={100} height={100} />
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
