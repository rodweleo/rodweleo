
"use client"

import { usePathname } from "next/navigation";
import Link from "next/link"
import { NavLinkProps } from "./main-nav";


export const NavLink = ({ href, title }: NavLinkProps) => {

    const pathName = usePathname()

    const isActive = pathName === href;

    return (
        <Link href={href} className={`hover:font-bold transition-all duration-300 ${isActive ? "font-bold" : "text-neutral-500"}`}>{title}</Link>
    )
}