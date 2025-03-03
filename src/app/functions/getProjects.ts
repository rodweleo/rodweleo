import supabaseClient from "../../utils/supabase/server"

export const getProjects = async () => {
    const { data: projects, error } = await supabaseClient
        .from('notable-projects')
        .select('*', {
            head: false
        });

    if(error){
        return []
    }

    if(!projects){
        return []
    }

    return projects;
}