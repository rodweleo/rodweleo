"use client"

import { fetchProjects } from "@/app/functions/fetch-projects"
import {
    useQuery,
} from '@tanstack/react-query'

export const useProjectsQuery = () => {
    return useQuery({ queryKey: ['projects'], queryFn: fetchProjects })
}