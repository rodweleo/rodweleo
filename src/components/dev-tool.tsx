
import Image from "next/image"

interface DevToolProp {
    tool: {
        thumbnail: string;
        name: string
    }
}
export const DevTool = ({ tool }: DevToolProp) => {
    return (
        <div key={tool.name} className="grid grid-cols-1 place-items-center">
            <Image src={tool.thumbnail} alt={tool.name} width={50} height={50} className="bg-transparent object-contain border-none rounded-full" />
            <p className="font-medium text-lg">{tool.name}</p>
        </div>
    )
}