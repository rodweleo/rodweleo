"use client"

import Image from "next/image"
import { Badge } from "./ui/badge"
import { ProjectProps } from "@/utils/types"
import Link from "next/link"

export default function NotableProjectCard({ project }: {
    project: ProjectProps
}) {
    return (
        <div className="relative w-[350px] h-[300px] group aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg cursor-pointer">
            <Image src={project.thumbnail_url === null ? "" : project.thumbnail_url} className="h-full w-full absolute inset-0 flex items-center justify-center" width={400} height={100} alt={project.name} unoptimized priority />
            <div className="absolute inset-0 bg-gray-800/90 flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:backdrop-blur-sm">
                <div className="relative p-2 h-full space-y-2 flex flex-col justify-between">
                    <div className="space-y-2">
                        <p className="font-bold text-2xl text-white">{project.name}</p>
                        <p className="text-white text-ellipsis line-clamp-3 text-md">{project.description}</p>
                    </div>
                    <Link href={`${project.live_link ? project.live_link : ""}`} target="_blank" className="text-blue-500 text-center border-2 font-bold border-blue-500 hover:font-bold hover:underline hover:text-white hover:bg-blue-500 transition-colors duration-200 px-20 py-4 rounded-full">View Website</Link>
                </div>
            </div>
        </div>
    )
}