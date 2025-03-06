
import supabaseClient from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { data: projects, error } = await supabaseClient
            .from('notable-projects')
            .select('*', {
                head: false
            });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(projects, { status: 200 });
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}
