import NotableProjectCard from '@/components/notable-project-card';
import { Badge } from '@/components/ui/badge';
import { createClient } from '@/utils/supabase/server';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Projects - Rodwell Leo",
    openGraph: {
        title: "Projects"
    }
}
export default async function Projects() {
    const supabase = createClient();
    const { data } = await supabase.from("notable-projects").select()

    return <section id="projects" className="flex flex-col w-full justify-center items-center space-y-5">
        <div className="text-center space-y-2.5">
            <Badge className="text-xl">My Projects</Badge>
            <h1 className="text-4xl font-bold">Check out my latest work</h1>
            <p className="text-slate-500">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
        </div>
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 w-full">
            {
                data ? data.map((project) => (
                    <li key={project.name}>
                        <NotableProjectCard project={project} />
                    </li>
                )) : null
            }
        </ul>
    </section>
}