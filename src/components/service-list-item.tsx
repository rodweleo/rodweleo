import Image from "next/image";

export default function ServiceListItem({ service }: {
    service: any
}) {
    return (
        <div className="max-w-[400px] space-y-2">
            <Image src={service.thumbnail} alt={service.title} width={500} height={500} className="rounded-xl" />
            <div>
                <h1 className="font-semibold text-2xl">{service.title}</h1>
                <p className="text-lg">{service.description}</p>
            </div>
        </div>
    )
}