
import NotableProjectCard from '@/components/notable-project-card';
import { cn } from "@/lib/utils"

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
                        <NotableProjectCard project={project} />
                    </li>
                ))
            }
        </ul>
    )
}