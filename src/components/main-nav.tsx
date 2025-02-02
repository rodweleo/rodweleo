"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetClose
} from "@/components/ui/sheet"
import { NavLink } from "./nav-link";
import { useIsMobile } from "@/hooks/use-mobile";
import { FaHamburger } from "react-icons/fa";
import { Separator } from "./ui/separator";

export interface NavLinkProps {
    href: string;
    title: string
}

export default function MainNav() {
    const isMobile = useIsMobile()

    const navLinks: NavLinkProps[] = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Projects",
            href: "/projects"
        },
        {
            title: "Blog",
            href: "/blog"
        },
        {
            title: "Tools",
            href: "/tools",
        },
        {
            title: "Services",
            href: "/services"
        },
        {
            title: "Contact",
            href: "/contact"
        },
    ]

    return (
        <nav>
            {!isMobile ? <DesktopNav navLinks={navLinks} /> :
                <MobileNav navLinks={navLinks} />}
        </nav>
    )
}


const DesktopNav = ({ navLinks }: {
    navLinks: NavLinkProps[]
}) => {
    return (
        <ul className="nav-bar flex gap-10">
            {
                navLinks.map((navLink) => {
                    const { href, title } = navLink;

                    return (<li key={href}>
                        <NavLink href={href} title={title} />
                    </li>)
                })
            }
        </ul>
    )
}

const MobileNav = ({ navLinks }: {
    navLinks: NavLinkProps[]
}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button type="button" title="Menu"><FaHamburger size={30} /></button>
            </SheetTrigger>
            <SheetContent className="space-y-4">
                <SheetHeader className="text-left">
                    <SheetTitle>Rodwell Leo</SheetTitle>
                    <SheetDescription>Living, Learning & Leveling up One day at a Time.</SheetDescription>
                </SheetHeader>
                <Separator />
                <div className="flex flex-col justify-between h-full w-full">
                    <ul className="nav-bar flex flex-col gap-5">
                        {
                            navLinks.map((navLink) => {
                                const { href, title } = navLink;

                                return (<li key={href}>
                                    <SheetClose asChild>
                                        <NavLink href={href} title={title} />
                                    </SheetClose>
                                </li>)
                            })
                        }
                    </ul>
                    <SheetFooter className="pb-28">
                        <p className="text-neutral-700">&copy; Copyright {new Date().getFullYear()} <br /> Rodwell Leo. All Rights Reserved.</p>
                    </SheetFooter>
                </div>
            </SheetContent>

        </Sheet>
    )
}