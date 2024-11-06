
import NotableProjectCard from '@/components/notable-project-card';


export default async function ProjectsList({projects}){
    
    return (
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 w-full">
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