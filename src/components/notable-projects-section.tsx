"use client";

import { useProjectsQuery } from "@/hooks/use-projects-query";
import ProjectsList from "./projects-list";
import Link from "next/link";
import { Loader2 } from "lucide-react";

export default function NotableProjectsSection() {
    const { data: projects, error, isLoading } = useProjectsQuery();

    return (
        <section id="notable-projects" className="py-10">
            <div className="gap-5 flex flex-col justify-center items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">My Recent Work</h1>
                    <p className="text-muted-foreground">
                        Here are a few past design projects I&apos;ve worked on.
                    </p>
                </div>

                {isLoading && (
                    <div className="flex items-center gap-2">
                        <Loader2 className="animate-spin" />
                        <p>Fetching projects...</p>
                    </div>
                )}

                {error && (
                    <div className="p-4 space-y-2 w-full rounded-md border border-red-500">
                        <h1 className="text-4xl text-red-500">Error</h1>
                        <p className="text-md text-red-500">{error.message}</p>
                    </div>
                )}

                {!isLoading && !error && projects && projects.length > 0 ? (

                    <ProjectsList projects={projects.sort().slice(0, 4)} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 w-fit" />
                ) : (
                    !isLoading &&
                    !error && <p className="text-neutral-700">No projects found.</p>
                )}

                <div className="flex justify-center">
                    <Link
                        href="/projects"
                        className="text-blue-500 w-fit border-2 font-bold border-blue-500 hover:font-bold hover:underline hover:text-white hover:bg-blue-500 transition-colors duration-200 px-20 py-3 rounded-full"
                    >
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
}
