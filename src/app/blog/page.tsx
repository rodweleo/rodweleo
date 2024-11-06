import BlogPostCard from "@/components/blog-post-card";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator"
import axios from "axios";
import BlogPostsList from "@/components/blog-posts-list";

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
const getBlogPosts = async () => {
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/blog-posts`);
        const posts = res.data;

        return posts
    }catch(e){
        return []
    }
}

export default async function Blog() {
    const posts = await getBlogPosts();

    return (
        <main className="container space-y-5">
            <header className="space-y-2.5 flex flex-col items-center justify-center">
                <h1 className="font-bold text-5xl">Blog&#9997;</h1>
                <p className="text-slate-500 text-xl text-center">An archive of everything I have written.</p>
                
            </header>
            <Separator />
            <BlogPostsList blogs={posts}/>
        </main>
    )
}