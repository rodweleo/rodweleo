"use client"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

export default function PostBlogCommentForm({ blogPost }: {
    blogPost: any
}) {
    const handleSubmitComment = () => {
        alert(`Add the new comment to ${blogPost.title}`)
    }
    return (
        <form onSubmit={handleSubmitComment}>
            <Textarea
                placeholder="Leave a comment"
                className="mb-4" />
            <Button>Post Comment</Button>
        </form>
    )
}