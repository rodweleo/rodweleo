"use client"

import { Input } from "@/components/ui/input";
import BlogPostCard from "./blog-post-card";
import { useState } from "react";
export default function BlogPostsList({blogs}:{
    blogs: any[]
}){

    const [filteredBlogs, setBlogs] = useState<any[]>(blogs)
    const handleBlogSearch = (e) => {
        const q = e.currentTarget.value;

        //setting te blogs' title and markdown as the search text content
        const filteredBlogs = blogs.filter((blog) => (blog.title + " " + blog.description + " " + blog.markdown).includes(q));
        setBlogs(filteredBlogs)
    }
    return (
        <div className="space-y-5">
            <Input type="search" placeholder="Search Articles" className="w-full" onChange={handleBlogSearch}/>
            <ul className="space-y-4">
                {filteredBlogs.map((blog) => (
                    <li key={blog.id}><BlogPostCard blog={blog} /></li>
                ))}
            </ul>
        </div>
    )
}