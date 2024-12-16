"use client"

import axios from "axios";

export const fetchProjects = async () => {
    try{
        const res = await axios.get('/api/projects');
        const projects = res.data;

        return projects
    }catch(e){
        return []
    }
}