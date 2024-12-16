
"use client"

// import { Metadata } from "next";
import { Separator } from "@/components/ui/separator"
import BlogPostsList from "@/components/blog-posts-list";
import { useBlogPosts } from "@/hooks/use-blog-posts";
import { useEffect } from "react";

// export const metadata: Metadata = {
//     title: "Blog - Rodwell Leo",
//     openGraph: {
//         type: "website",
//         url: "https://rodweleo.vercel.app/blog",
//         title: "My Blog",
//         description: "My Website Blog",
//         siteName: "My Blog",
//     }
// }


export default function Blog() {

    const {posts, isLoading} = useBlogPosts()

    useEffect(() => {
        document.title = "Blog - Rodwell Leo"
    }, [])


    return (
        <main className="container space-y-5">
            <header className="space-y-2.5 flex flex-col items-center justify-center">
                <h1 className="font-bold text-5xl">Blog&#9997;</h1>
                <p className="text-slate-500 text-xl text-center">An archive of everything I have written.</p>
                
            </header>
            <Separator />

            {
                isLoading ? <div className="space-y-4">
                    <div className="flex w-full max-md:flex-wrap gap-2.5 border bg-white rounded-lg p-2.5">
                        <div className="animate-pulse rounded-lg bg-slate-300 max-md:w-full object-cover size-[225px]" />
                        <div className="flex flex-col justify-between space-y-2.5 w-full ">
                            <div className="space-y-4">
                                <div className="animate-pulse bg-slate-300 w-full h-8 rounded-lg"></div>
                                <div className="space-y-2">
                                    <div className="animate-pulse bg-slate-300 w-full h-4 rounded-lg"></div>
                                    <div className="animate-pulse bg-slate-300 w-full h-4 rounded-lg"></div>
                                    <div className="animate-pulse bg-slate-300 w-2/4 h-4 rounded-lg"></div>
                                </div>
                                <ul className="flex flex-wrap gap-2.5">
                                    <div className="animate-pulse bg-slate-300 w-[100px] h-6 rounded-lg"></div>
                                    <div className="animate-pulse bg-slate-300 w-[100px] h-6 rounded-lg"></div>
                                </ul>
                            </div>
                            <div className="animate-pulse bg-slate-300 w-[125px] h-8 rounded-lg"></div>
                        </div>
                    </div>

                    <div className="flex w-full max-md:flex-wrap gap-2.5 border bg-white rounded-lg p-2.5">
                        <div className="animate-pulse rounded-lg bg-slate-300 max-md:w-full object-cover size-[225px]" />
                        <div className="flex flex-col justify-between space-y-2.5 w-full ">
                            <div className="space-y-4">
                                <div className="animate-pulse bg-slate-300 w-full h-8 rounded-lg"></div>
                                <div className="space-y-2">
                                    <div className="animate-pulse bg-slate-300 w-full h-4 rounded-lg"></div>
                                    <div className="animate-pulse bg-slate-300 w-full h-4 rounded-lg"></div>
                                    <div className="animate-pulse bg-slate-300 w-2/4 h-4 rounded-lg"></div>
                                </div>
                                <ul className="flex flex-wrap gap-2.5">
                                    <div className="animate-pulse bg-slate-300 w-[100px] h-6 rounded-lg"></div>
                                    <div className="animate-pulse bg-slate-300 w-[100px] h-6 rounded-lg"></div>
                                </ul>
                            </div>
                            <div className="animate-pulse bg-slate-300 w-[125px] h-8 rounded-lg"></div>
                        </div>
                    </div>
                </div> : <BlogPostsList blogs={posts} />
            }
        </main>
    )
}