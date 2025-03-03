
import ProjectsList from "@/components/projects-list";
import { Metadata } from "next";
import { getProjects } from "../functions/getProjects";
import { Suspense } from "react";
import ProjectsHeader from "@/components/Projects/projects-header";


export const metadata: Metadata = {
    title: "Portfolio Projects | Rodwell Leo",
    description: "Showcasing my journey as a software engineer through innovative solutions and creative problem-solving."
}
export default async function Page() {
    
    const projects = await getProjects()

    return (
        <section id="projects" className="space-y-5">
            <ProjectsHeader/>
            <Suspense fallback={<LoadingState />}>
                <ProjectsList projects={projects} className="flex flex-wrap items-center justify-center gap-10 h-full" />
            </Suspense>
           
        </section>
    );
}

const LoadingState = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 w-fit">
            {[1, 2, 3].map((item) => (
                <div key={item} className="animate-pulse w-[350px] h-[300px]">
                    <div className="h-full w-full bg-gray-200 rounded-xl overflow-hidden shadow-lg cursor-pointer"></div>
                </div>
            ))}
        </div>
    );
};


