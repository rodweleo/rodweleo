"use client";

import ProjectsList from "@/components/projects-list";
import { useProjectsQuery } from "@/hooks/use-projects-query";
import { useEffect } from "react";


export default function Projects() {
    const { data: projects, isLoading, error } = useProjectsQuery();

    useEffect(() => {
        document.title = "Projects - Rodwell Leo";
    }, []);

    return (
        <section id="projects" className="space-y-5">
            <div className="space-y-2.5">
                <h1 className="sm:text-5xl text-4xl font-bold">Check out my Latest work</h1>
                <p className="text-neutral-700 sm:text-xl text-lg">
                    I have worked on a variety of projects, from simple websites to complex web applications.
                    <br />
                    Here are some of my favorites:
                </p>
            </div>
            {isLoading && <LoadingState />}
            {error && (
                <div className="p-4 space-y-2 w-full rounded-md border border-red-500">
                    <h1 className="text-4xl text-red-500">Error</h1>
                    <p className="text-md text-red-500">{error.message}</p>
                </div>
            )}

            {!isLoading && !error && projects && projects.length > 0 ? (
                <ProjectsList projects={projects} className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-10 w-fit" />
            ) : (
                !isLoading &&
                !error && <p className="text-neutral-700">No projects found.</p>
            )}
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
