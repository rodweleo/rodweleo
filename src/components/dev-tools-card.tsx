import { DevTool } from "./dev-tool"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card"


interface DevToolsCardProps {
    tools: any[],
    title: string,
    description: string
}
export const DevToolsCard = ({ tools, title, description }: DevToolsCardProps) => {
    return (
        <Card className="cursor-pointer hover:shadow-sm hover:bg-gray-100 hover:scale-[1.025] animate-transition transition-all">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="flex flex-wrap items-end gap-10">
                    {
                        tools.map((tool, index: number) => (
                            <li key={index}>
                                <DevTool tool={tool} />
                            </li>
                        ))
                    }
                </ul>
            </CardContent>
        </Card>
    )
}