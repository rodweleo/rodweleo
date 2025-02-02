
import { DevToolsCard } from "@/components/dev-tools-card";

export default function ToolsPage() {

    const PL_TOOLS = [
        {
            name: "Javascript",
            thumbnail: "/images/skills_images/icons8-javascript-240.png",
        },
        {
            name: "Typescript",
            thumbnail: "/images/skills_images/icons8-typescript-480.png",
        },
        {
            name: "Java",
            thumbnail: "/images/skills_images/icons8-java.svg",
        },
        {
            name: "Motoko",
            thumbnail: "/images/skills_images/motoko_logo.svg",
        },
        {
            name: "Solidity",
            thumbnail: "/images/skills_images/icons8-solidity-480.png",
        },
    ]

    const FRONTEND_TOOLS = [
        {
            name: "ReactJS",
            thumbnail: "/images/skills_images/icons8-react-native-480.png",
        },
        {
            name: "NextJS",
            thumbnail: "/images/skills_images/nextjs.svg",
        },
        {
            name: "TailwindCSS",
            thumbnail: "/images/skills_images/icons8-tailwind-css-240.png",
        },
        {
            name: "ShadCN",
            thumbnail: "/images/skills_images/shadcn_logo.jpg",
        },
    ]

    const BACKEND_TOOLS = [
        {
            name: "NodeJS",
            thumbnail: "/images/skills_images/icons8-nodejs-480.png",
        },
        {
            name: "Spring Boot",
            thumbnail: "/images/skills_images/icons8-spring-boot-480.png",
        },
        {
            name: "NestJS",
            thumbnail: "/images/skills_images/icons8-nestjs-480.png",
        },

    ]

    const DATABASE_TOOLS = [
        {
            name: "MySQL",
            thumbnail: "/images/skills_images/icons8-mysql-500.png",
        },
        {
            name: "Supabase",
            thumbnail: "/images/skills_images/supabase-logo-icon.svg",
        },
        {
            name: "MongoDB",
            thumbnail: "/images/skills_images/icons8-mongodb-96.png",
        },
        {
            name: "Firebase",
            thumbnail: "/images/skills_images/icons8-google-firebase-console-480.png",
        },
    ]

    const APP_DEPLOYMENT_TOOLS = [
        {
            name: "Vercel",
            thumbnail: "/images/skills_images/vercel.ico",
        },
        {
            name: "Internet Computer Protocol (ICP)",
            thumbnail: "/images/skills_images/ICP_LOGO.jpg",
        },

    ]

    return (
        <section className="space-y-5">
            <header className="w-full max-w-4xl space-y-2">
                <h1 className="font-bold sm:text-5xl text-3xl">Technologies & Tools I use to build software solutions.</h1>
                <p className="text-neutral-700">Here&apos;s a comprehensive overview of my technical skills and the technologies I work with regularly.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                <DevToolsCard
                    title="Programming Languages"
                    description="Writing clean and maintainable code."
                    tools={PL_TOOLS}
                />

                <DevToolsCard
                    title="Frontend Development"
                    description="Building modern and responsive web applications."
                    tools={FRONTEND_TOOLS}
                />

                <DevToolsCard
                    title="Backend Development"
                    description="Creating scalable server-side applications."
                    tools={BACKEND_TOOLS}
                />

                <DevToolsCard
                    title="Database Development"
                    description="Designing and deploying scalable and fault tolerant information systems."
                    tools={DATABASE_TOOLS}
                />

                <DevToolsCard
                    title="Web Application Deployment & Hosting"
                    description="Giving the application its home address on the web."
                    tools={APP_DEPLOYMENT_TOOLS}
                />

            </div>
        </section>
    )
}