"use client";

import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export default function NotableProjectActions({ project }: {
    project: any
}) {
    const handleViewProject = () => {
        if (project.live_link) {
            window.open(project.live_link, "_blank");
        }
    };

    return (
        <ul className="flex justify-between p-2.5">
            <li>
                <Button
                    variant="outline"
                    onClick={() => window.open(project.github_link, "_blank")}
                    disabled={!project.github_link}
                >
                    Github
                </Button>
            </li>
            <li>
                <Button
                    className="flex items-center gap-1"
                    onClick={handleViewProject}
                    disabled={!project.live_link}
                    aria-disabled={!project.live_link}
                >
                    <ExternalLink className="size-4" /> <span>View Project</span>
                </Button>
            </li>
        </ul>
    );
}
