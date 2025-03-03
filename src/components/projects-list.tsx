
import { cn } from "@/lib/utils"
import { ProjectCard } from './Projects/project-card';

interface ProjectsListProps{
    projects: any[],
    className?: string
}

export default function ProjectsList({ projects, className }: ProjectsListProps) {

    return (
        <ul className={cn(className)}>
            {
                projects.map((project: any) => (
                    <li key={project.name}>
                        <ProjectCard project={project} />
                    </li>
                ))
            }
        </ul>
    )
}