import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Metadata } from "next";
import Image from "next/image";
import PostBlogCommentForm from "@/components/post-blog-comment-form";
import { format, parseISO } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { Clock } from 'lucide-react';
import supabaseClient from "@/utils/supabase/server";

export async function generateStaticParams() {
    try {
        const { data: posts, error } = await supabaseClient
            .from('blog-posts')
            .select('slug');

        if (error) throw error;

        return posts.map((post: any) => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params;

    try {
        const { data: post, error } = await supabaseClient
            .from('blog-posts')
            .select('*')
            .eq('slug', slug)
            .single();

        if (error || !post) throw new Error("Invalid response or no post found");

        return {
            title: post.title,
            description: post.description,
            openGraph: {
                title: post.title,
                description: post.description,
                images: [
                    {
                        url: post.thumbnail,
                        width: 800,
                        height: 600,
                        alt: post.title,
                    },
                ],
            },
        };
    } catch (error) {
        console.error("Error generating metadata:", error);
        return {
            title: "Error",
            description: "Unable to fetch post metadata",
        };
    }
}

export default async function Page({ params }: {
    params: {
        slug: string,
    }
}) {
    const { slug } = params;

    const { data: post, error } = await supabaseClient
        .from('blog-posts')
        .select("*")
        .eq('slug', slug)
        .single();

    if (error || !post) {
        console.error("Error fetching blog post:", error);
        return <p>Error loading blog post</p>;
    }

    const date = parseISO(post.created_at);
    const formattedDate = format(date, 'MMMM do, yyyy - HH:mm:ss');

    return (
        <main className="space-y-5">
            <figure>
                <Image src={post.thumbnail} className="w-full rounded-xl" width={800} height={500} unoptimized alt={post.title} />
            </figure>
            <div className="flex items-center gap-5">
                <p className="flex items-center gap-1"><CalendarDays size={17} /> <span>{formattedDate}</span></p>
                <p className="flex items-center gap-1"><Clock size={17} /> <span>5 mins read</span></p>
            </div>
            <h1 className="font-bold text-5xl">{post.title}</h1>
            <article className="text-xl" dangerouslySetInnerHTML={{ __html: post.markdown }}></article>
            <section className="space-y-5">
                <h1 className="font-bold text-3xl">Comments</h1>
                <ul className="space-y-2.5">
                    {
                        post.comments.map((comment: any) => (
                            <li key={comment.id}>
                                <Card className="max-w-lg">
                                    <CardHeader>
                                        <div className="flex items-center space-x-4">
                                            <Avatar>
                                                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.author}`} />
                                                <AvatarFallback>{comment.author[0]}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <CardTitle className="text-lg font-medium">{comment.author}</CardTitle>
                                                <p className="text-sm text-muted-foreground">{comment.date}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-lg">{comment.content}</p>
                                    </CardContent>
                                </Card>
                            </li>
                        ))
                    }
                </ul>
                <div className="max-w-lg">
                    <PostBlogCommentForm blogPost={post} />
                </div>
            </section>
        </main>
    );
}
