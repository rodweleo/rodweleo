import { ReactNode } from "react"
import { Badge } from "./ui/badge";

interface SocialLinkBadgeProps {
    link: {
        icon: ReactNode;
        name: string
    }
}
export const SocialLinkBadge = ({ link }: SocialLinkBadgeProps) => {

    const { name, icon } = link

    function getSocialPlatformColor() {
        switch (name.toLowerCase()) {
            case "github":
                return "bg-slate-500 hover:bg-slate-400"
            case "linkedin":
                return "bg-blue-600 hover:bg-blue-500"
            case "twitter":
                return "bg-black";
            case "mail":
                return "bg-yellow-500 hover:bg-yellow-400"
            case "telegram":
                return "bg-blue-500 hover:bg-blue-400"
            default:
                return "bg-black"
        }
    }
    return (
        <Badge className={`space-x-2 py-1 px-4 ${getSocialPlatformColor()}`}>{icon} <span>{name}</span></Badge>
    )
}