
import NotableProjectCard from '@/components/notable-project-card';


export default async function ProjectsList({projects}:{
    projects: any[]
}){
    
    return (
        <ul className="flex flex-wrap gap-5 justify-center">
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