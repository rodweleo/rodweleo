"use client"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"

export default function PostBlogCommentForm({ blogPost }) {
    const handleSubmitComment = () => {
        alert("Add the new comment")
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