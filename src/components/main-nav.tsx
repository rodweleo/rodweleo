"use client"

import useWindowDimensions from "@/hooks/useWindowDimensions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
export default function MainNav() {
    const pathname = usePathname()
    const { dimensions } = useWindowDimensions()

    const navLinks = [
        {
            name: "Projects",
            slug: "/projects",
            path: "/projects"
        },
        {
            name: "Blog",
            slug: "/blog",
            path: "/blog"
        },
        {
            name: "Services",
            slug: "/services",
            path: "/services"
        },

    ]

    return (
        <nav>
            {dimensions.width > 768 ? <ul className="nav-bar flex gap-10">
                {
                    navLinks.map((navLink) => (
                        <li key={navLink.path}><Link href={navLink.path} className={`hover:font-bold transition-all duration-100 ${pathname === navLink.path ? "font-bold" : "text-slate-500"}`}>{navLink.name}</Link></li>
                    ))
                }

            </ul> :
                <Sheet>
                    <SheetTrigger asChild>
                        <button type="button" title="Menu"><Menu size={30} /></button>
                    </SheetTrigger>
                    <SheetContent>
                        <ul className="nav-bar flex flex-col gap-5">
                            {
                                navLinks.map((navLink) => (
                                    <li key={navLink.path}><Link href={navLink.path} className={`${pathname === navLink.path ? "font-bold" : "text-slate-500"}`}>{navLink.name}</Link></li>
                                ))
                            }
                        </ul>
                    </SheetContent>
                </Sheet>}

        </nav>
    )
}