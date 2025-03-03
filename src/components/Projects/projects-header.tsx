
"use client"

import { motion } from "framer-motion"

export default function ProjectsHeader() {
    return (
        <header className="w-full">
            <div className="text-center w-full grid place-items-center">
                <motion.h1
                    className="text-4xl font-bold tracking-tight sm:text-5xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My <span className="text-primary">Projects</span> Portfolio
                </motion.h1>
                <motion.p
                    className="mt-4 text-muted-foreground max-w-4xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Showcasing my journey as a software engineer through innovative solutions and creative problem-solving. Each
                    project represents a unique challenge and learning experience.
                </motion.p>
            </div>
        </header>
    )
}