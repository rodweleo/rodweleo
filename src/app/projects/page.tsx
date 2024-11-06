import ProjectsList from '@/components/projects-list';
import { Badge } from '@/components/ui/badge';
import { Metadata } from 'next';
import { NOTABLE_POJECTS } from "@/utils/data"

export const metadata: Metadata = {
    title: "Projects - Rodwell Leo",
    openGraph: {
        title: "Projects"
    }
}
export default function Projects() {
    
    return <section id="projects" className="flex flex-col w-full justify-center items-center space-y-5">
        <div className="text-center space-y-2.5">
            <Badge className="text-xl">My Projects</Badge>
            <h1 className="text-4xl font-bold">Check out my latest work</h1>
            <p className="text-slate-500">I have worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
        </div>
        <ProjectsList projects={NOTABLE_POJECTS}/>
    </section>
}