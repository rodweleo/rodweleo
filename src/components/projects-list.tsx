
import NotableProjectCard from '@/components/notable-project-card';


export default function ProjectsList({projects}:{
    projects: any[]
}){
    
    return (
        <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
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