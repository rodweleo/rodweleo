"use client"

import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { ThumbsUp, MessageSquare } from 'lucide-react';

type CommentProps = {
    id: string;
    blog_id: string;
    author: string;
    created_at: string;
    content: string;
    likes: number
}
export default function CommentBox({comment}:{
    comment: CommentProps
}){
    return (
        <Card className="max-w-lg">
            <CardHeader>
                <div className="flex items-center space-x-4">
                    <Avatar>
                        <AvatarImage
                            src={`https://api.dicebear.com/6.x/initials/svg?seed=${comment.author}`}
                        />
                        <AvatarFallback>{comment.author}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-lg font-medium">{comment.author}</CardTitle>
                        <p className="text-sm text-muted-foreground">{comment.created_at}</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p className="text-lg">{comment.content}</p>
            </CardContent>
            <CardFooter className="flex items-center justify-start gap-10">
                <div className="flex items-center gap-2">
                    <button type="button" title="Like Comment"><ThumbsUp size={20} /></button>
                    <span className="mt-1 font-bold">{comment.likes}</span>
                </div>

                <div className="flex items-center gap-2">
                    <button type="button" title="Reply Comment"><MessageSquare size={20} /></button>
                    <span className="font-bold">Reply</span>
                </div>
            </CardFooter>
        </Card>
    )
}