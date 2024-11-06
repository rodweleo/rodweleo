import Image from "next/image"
import { Badge } from "./ui/badge"
import NotableProjectActions from "./notable-project-card-actions"
import { ProjectProps } from "@/utils/types"
export default function NotableProjectCard({ project }: {
    project: ProjectProps
}) {
    return (
        <div className="sm:w-fit max-xl:flex-wrap cursor-pointer h-auto rounded-xl border flex justify-between shadow-xl hover:shadow-2xl hover:scale-[1.0075] transition-all duration-300 bg-white/90 " key={project.name}>
            <Image src={project.thumbnail_url === null ? "" : project.thumbnail_url} className="max-xl:w-full rounded-t-lg" width={200} height={100} alt={project.name} unoptimized priority />
            <div className="p-2 flex flex-col h-full space-y-1">
                <h1 className="font-bold text-2xl">{project.name}</h1>
                <p className="text-slate-500 text-ellipsis line-clamp-3 text-md">{project.description}</p>
                <ul className="flex flex-wrap gap-1">
                    {
                        project.tech_stack.sort().map((stack: string) => (
                            <Badge key={stack} className="bg-slate-200 text-black hover:bg-slate-300">{stack}</Badge>
                        ))
                    }
                </ul>
                <NotableProjectActions project={project} />
            </div>

        </div>
    )
}