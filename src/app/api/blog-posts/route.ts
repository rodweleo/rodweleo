
import supabaseClient from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { data: posts, error } = await supabaseClient
            .from('blog-posts')
            .select('*');

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}
