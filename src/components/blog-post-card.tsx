import Image from "next/image"
import { Badge } from "./ui/badge"
import Link from "next/link"


export default function BlogPostCard({ blog }: {
    blog: any
}) {

    return (
        <div className="flex max-md:flex-wrap gap-2.5">
            <Image src={blog.thumbnail} alt={blog.title} width={300} height={300} className="rounded-xl max-md:w-full" unoptimized />
            <div className="flex flex-col justify-between space-y-2.5">
                <div>
                    <h1 className="font-bold text-3xl">{blog.title}</h1>
                    <p className="text-lg text-slate-500">{blog.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                    {blog.tags.map((tag: string) => (
                        <li key={tag}><Badge className="bg-slate-500">{tag}</Badge></li>
                    ))}
                </ul>
                <Link href={`/blog/${blog.slug}`} className="text-blue-500">Read More</Link>
            </div>
        </div>
    )
}