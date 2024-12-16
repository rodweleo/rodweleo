"use client"

import { fetchProjects } from "@/app/functions/fetch-projects"
import { useEffect, useState } from "react"

export const useProjects = () => {
    const [projects, setProjects] = useState([])

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetchProjects().then((projects) => {
            setProjects(projects)
        }).catch(() => {
            setProjects([])
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return {
        projects,
        isLoading
    }
}