import axios from "axios";

export const fetchBlogPosts = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/blog-posts`);
        const posts = res.data;

        return posts
    } catch (e) {
        return []
    }
}