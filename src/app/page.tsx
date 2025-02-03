
import Link from "next/link";
import { TOOLS } from "@/utils/data";
import WorkExperienceList from "@/components/work-experience-list";
import { Button } from "@/components/ui/button";
import NotableProjectsSection from "@/components/notable-projects-section";
import TestimonialsSection from "@/components/testimonials-section"
import { Separator } from "@/components/ui/separator"
import HeroSection from "@/components/hero-section"
import { MessageSquare } from "lucide-react";
import { DevTool } from "@/components/dev-tool";
import FadeIn from "@/components/fade-in";

export default function Home() {
  return (
    <main className="space-y-10">
      <FadeIn duration={100}>
        <HeroSection />
      </FadeIn>

      <FadeIn duration={150}>
        <section id="about-me" className="py-24  bg-gray-100 ">
          <div className="space-y-2.5 grid place-items-center px-5 text-center">
            <h1>Hi, I&apos;m Rodwell Leo. Nice to Meet You.</h1>
            <p className="text-slate-800 text-lg max-w-4xl w-full">At the end of 2022, I completed my course and fulltime got into building and scaling my own SaaS businesses. Previously, I <strong><u><a href="#education">pursued a degree in computer science</a></u></strong> , <strong><u><a href="#work-experience">interned at big tech companies</a></u></strong>, and <strong><u>competed in over 10 hackathons.</u></strong> I&apos;m confident, naturally curious, and perpetually working on improving my skills one day at a time.</p>
          </div>
        </section>
      </FadeIn>


      <FadeIn duration={200}>
        <section id="work-experience">
          <div className="space-y-2 ">
            <h1 className="text-4xl font-bold text-center">Here&apos;s where I&apos;ve worked at</h1>
            <WorkExperienceList />
          </div>
        </section>
      </FadeIn>

      <FadeIn duration={250}>
        <NotableProjectsSection />
      </FadeIn>

      <Separator />

      <FadeIn duration={300}>
        <section id="language&tools" className="py-12">
          <div className="space-y-10 grid place-items-center">
            <div className="text-center">
              <h1 className="font-bold text-4xl flex gap-2">A Craftsman & His Tools</h1>
              <p className="text-muted-foreground">Technologies and tools I use to build software solutions.</p>
            </div>
            <ul id="languages&tools" className="flex flex-wrap gap-10 w-fit items-end">
              {
                TOOLS.map((tool) => (
                  <li key={tool.name}>
                    <DevTool
                      tool={tool}
                    />
                  </li>
                ))
              }
            </ul>
          </div>
        </section>
      </FadeIn>

      <Separator />

      <FadeIn duration={350}>
        <TestimonialsSection />
      </FadeIn>

      <Separator />

      <FadeIn duration={400}>
        <section className="w-full">
          <div className="py-20 text-center space-y-5">
            <p className=" sm:text-4xl text-3xl font-bold">Interested in collaborating with me?</p>
            <p className="text-muted-foreground">I&apos;m always open to discussing product design work or partnership opportunities.</p>
            <Button className="rounded-full px-10 py-6 hover:text-blue-500 bg-blue-500 hover:bg-transparent text-white hover:border-2 hover:border-blue-500 font-bold"><Link href="/contact" className="flex items-center gap-2.5"> <MessageSquare /> <span>Start a Conversation</span> </Link></Button>
          </div>
        </section>
      </FadeIn>

    </main>
  );
}
