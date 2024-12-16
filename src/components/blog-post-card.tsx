import Image from "next/image"
import { Badge } from "./ui/badge"
import Link from "next/link"


export default function BlogPostCard({ blog }: {
    blog: any
}) {

    return (
        <div className="flex max-md:flex-wrap gap-2.5">
            <Image src={blog.thumbnail} alt={blog.title} width={200} height={200} className="rounded-lg max-md:w-full object-cover size-[225px]" unoptimized />
            <div className="flex flex-col justify-between space-y-2.5">
                <div className="space-y-2">
                    <div>
                        <Link href={`/blog/${blog.slug}`}><h1 className="font-bold text-2xl hover:underline">{blog.title}</h1></Link>
                        <p className="text-lg text-slate-500">{blog.description}</p>
                    </div>
                    <ul className="flex flex-wrap gap-2.5">
                        {blog.tags.map((tag: string) => (
                            <li key={tag}><Badge className="bg-slate-500">{tag}</Badge></li>
                        ))}
                    </ul>
                </div>
                <Link href={`/blog/${blog.slug}`} className="text-blue-500">Read More</Link>
            </div>
        </div>
    )
}