"use client"

import ProjectsList from '@/components/projects-list';
import { Badge } from '@/components/ui/badge';
import { useProjects } from '@/hooks/use-projects';
import { useEffect } from 'react';

// export const metadata: Metadata = {
//     title: "Projects - Rodwell Leo",
//     description: "Explore the latest projects by Rodwell Leo, showcasing expertise in web development and design.",
//     openGraph: {
//         title: "Projects",
//         description: "Explore the latest projects by Rodwell Leo, showcasing expertise in web development and design."
//     }
// }


export default function Projects() {

    const { projects, isLoading } = useProjects()

    useEffect(() => {
        document.title = "Projects - Rodwell Leo"
    }, [])


    return <section id="projects" className="flex flex-col w-full justify-center items-center space-y-5">
        <div className="text-center space-y-2.5">
            <Badge className="text-xl">My Projects</Badge>
            <h1 className="text-4xl font-bold">Check out my latest work</h1>
            <p className="text-slate-500">I have worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
        </div>
        <div>


        </div>
        {
            isLoading ?
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                    <div className="animate-pulse w-[350px] h-[300px]">
                        <div className="h-full w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg cursor-pointer"></div>
                    </div>

                    <div className="animate-pulse w-[350px] h-[300px]">
                        <div className="h-full w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg cursor-pointer"></div>
                    </div>

                    <div className="animate-pulse w-[350px] h-[300px]">
                        <div className="h-full w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg cursor-pointer"></div>
                    </div>
                </div>
                : <ProjectsList projects={projects} />
        }

    </section>
}