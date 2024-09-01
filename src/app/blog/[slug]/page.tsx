import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import axios from "axios";
import { Metadata } from "next";
import Image from "next/image"
import PostBlogCommentForm from "@/components/post-blog-comment-form";
import { format, parseISO } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { Clock } from 'lucide-react';
export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogposts`).then((res) => res.json());
    const posts = res.data;

    return posts.map((post: any) => ({
        slug: post.slug,
        post: post
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = params;

    // Fetch post data to generate metadata
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogposts`, {
        params: {
            slug: slug
        }
    });

    const post = res.data.data[0];

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
}

export default async function Page({ params }: {
    params: {
        slug: string,
        post: any
    }
}) {

    const { slug } = params;
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogposts`, {
        params: {
            slug: slug
        }
    })

    const post = res.data.data[0];

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
    )
}