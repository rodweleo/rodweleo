"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { Project } from "@/utils/types"
import Link from "next/link"

interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
        }).format(date)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <Card className="overflow-hidden cursor-pointer transition-all duration-300 h-full flex flex-col hover:border-primary/50 hover:shadow-lg w-full max-w-lg">
                <div className="relative overflow-hidden bg-muted w-full max-w-lg">
                    {project.thumbnail_url ? (
                        <Image
                            src={project.thumbnail_url || "/placeholder.svg"}
                            alt={`${project.name} thumbnail`}
                            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
                            width={1920}
                            height={1080}
                            priority
                        />
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-muted">
                            <span className="text-muted-foreground">No image available</span>
                        </div>
                    )}
                </div>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                            {formatDate(project.created_at)}
                        </Badge>
                    </div>
                    <CardDescription className="line-clamp-3 mt-2 text-md">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech_stack.map((tech: string) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="pt-0 flex justify-between">
                    {project.live_link ? (
                        <Button variant="outline" size="sm" className="gap-2" asChild>
                            <Link href={project.live_link} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                View Live
                            </Link>
                        </Button>
                    ) : (
                        <Button variant="outline" size="sm" disabled className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            Coming Soon
                        </Button>
                    )}
                    <Button variant="ghost" size="sm" className="gap-2">
                        <Github className="h-4 w-4" />
                        Code
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

