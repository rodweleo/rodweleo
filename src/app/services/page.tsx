import ServiceListItem from "@/components/service-list-item";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Services - Rodwell Leo",
    openGraph: {
        title: "Services"
    }
}
export default function Services() {
    const services = [

        {
            icon: "fa-solid fa-shield-halved",
            title: "Cyber Security",
            description: "Safeguarding organization's data and systems from cyber attacks and unauthorized access. ",
            thumbnail: "/images/cyber-security.png"
        },
        {
            icon: "fa-solid fa-cloud",
            title: "Cloud Services",
            description: "I provide comprehensive solutions tailored to your business needs, from selecting the right cloud provider to the implementation of scalable and cost-effective architectures.",
            thumbnail: "/images/cloud-services.png"
        },
        {
            icon: "fa-solid fa-gears",
            title: "API Intergration",
            description: "I implement automated processes, continuous integration/continuous deployment (CI/CD) pipelines, and infrastructure as code (IaC) to streamline development, testing, and deployment workflows.",
            thumbnail: "/images/api-integration.png"
        },
        {
            icon: "fa-solid fa-mobile-screen-button",
            title: "Mobile Development",
            description: "I leverage the latest frameworks and technologies such as Flutter to build high-performance and user-friendly mobile applications. ",
            thumbnail: "/images/mobile-app-development.png"
        }
        ,
        {
            icon: "fa-solid fa-globe",
            title: "Web Development",
            description: "Building web applications; from front-end user interfaces, business logic to back-end server logic and database management. ",
            thumbnail: "/images/web-development.png"
        }
    ];

    return (
        <main className="space-y-5">
            <header className="space-y-2">
                <Badge className="text-xl">My Services</Badge>
                <h1 className="font-bold text-4xl">What I offer</h1>
                <p className="text-neutral-700 text-md">This are some of the services you&apos;d get once we partner</p>
            </header>
            <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 w-fit">
                {services.map((service) => (
                    <li key={service.title}>
                        <ServiceListItem service={service} />
                    </li>
                ))}
            </ul>
        </main>
    )
}