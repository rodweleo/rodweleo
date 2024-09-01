import BlogPostCard from "@/components/blog-post-card";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/server"
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator"


export const metadata: Metadata = {
    title: "Blog - Rodwell Leo",
    openGraph: {
        type: "website",
        url: "https://rodweleo.vercel.app/blog",
        title: "My Blog",
        description: "My Website Blog",
        siteName: "My Blog",
    }
}
const fetchBlogPosts = async () => {
    const supabase = createClient();
    const { data, error } = await supabase.from("blog-posts").select("*")

    return {
        data,
        error
    }
}

export default async function Blog() {
    const { data, error } = await fetchBlogPosts();
    return (
        <main className="space-y-5">
            <header className="space-y-2.5 flex flex-col items-center justify-center">
                <h1 className="font-bold text-5xl">Blog&#9997;</h1>
                <p className="text-slate-500 text-xl text-center">An archive of everything I have written.</p>
                <Input type="search" placeholder="Search Articles" className="max-w-xl" />
            </header>
            <Separator />
            <ul>
                {data?.map((blog) => (
                    <li key={blog.id}><BlogPostCard blog={blog} /></li>
                ))}
            </ul>
        </main>
    )
}