
import supabaseClient from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const { data: workExperience, error } = await supabaseClient
            .from('work-experience')
            .select('*');

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(workExperience, { status: 200 });
    } catch (error) {
        console.error('Error fetching work experience:', error);
        return NextResponse.json({ error: 'Failed to fetch work experience' }, { status: 500 });
    }
}
