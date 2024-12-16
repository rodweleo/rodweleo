"use client"

import { fetchBlogPosts } from "@/app/functions/fetch-blog-posts"
import { useEffect, useState } from "react"

export const useBlogPosts = () => {
    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetchBlogPosts().then((posts) => {
            setPosts(posts)
        }).catch(() => {
            setPosts([])
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return {
        posts,
        isLoading
    }
}