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
            icon: "fa-solid fa-globe",
            title: "Web Development",
            description: "Building web applications; from front-end user interfaces, business logic to back-end server logic and database management. ",
            thumbnail: "/images/web-development.png"
        },
        {
            icon: "fa-solid fa-gears",
            title: "API Development",
            description: "I build scalable and secure RESTFUL APIs helping in faster data accessing and data operations.",
            thumbnail: "/images/api-integration.png"
        },
          {
            icon: "fa-solid fa-cloud",
            title: "Cloud Services",
            description: "I provide comprehensive cloud solutions tailored to your business needs implementating scalable and cost-effective architectures.",
            thumbnail: "/images/cloud-services.png"
        },
        {
            icon: "fa-solid fa-shield-halved",
            title: "Cyber Security",
            description: "Safeguarding organization's data and systems from cyber attacks and unauthorized access. ",
            thumbnail: "/images/cyber-security.png"
        },
    ];

    return (
        <main className="space-y-5">
            <header className="space-y-2">
                <Badge className="text-xl">My Services</Badge>
                <h1 className="font-bold text-4xl">What I offer</h1>
                <p className="text-neutral-700 text-md">This are some of the services you&apos;d get once we partner</p>
            </header>
            <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 w-fit">
                {services.map((service) => (
                    <li key={service.title}>
                        <ServiceListItem service={service} />
                    </li>
                ))}
            </ul>
        </main>
    )
}