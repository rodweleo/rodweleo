"use client"

import { useProjects } from "@/hooks/use-projects"
import ProjectsList from "./projects-list"
import Link from "next/link"

export default function NotableProjectsSection(){
    
    const { projects } = useProjects()

    return (
        <section id="notable-projects">
            <div className="container gap-5 flex flex-col justify-between items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">My Recent Work</h1>
                    <p>Here are a few past design projects I&apos;ve worked on.</p>
                </div>
                <ProjectsList projects={projects.sort().slice(0, 3)} />
                <Link href="/projects" className="text-blue-500 w-fit border-2 font-bold border-blue-500 hover:font-bold hover:underline hover:text-white hover:bg-blue-500 transition-colors duration-200 px-20 py-3 rounded-full  ">View All</Link>
            </div>
        </section>
    )
}