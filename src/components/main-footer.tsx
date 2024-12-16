"use client"

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function MainFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="grid grid-cols-1 place-items-center space-y-10 py-24 bg-gray-800 ">
            <p className="text-neutral-300 text-2xl font-bold tracking-wide text-center">Living, Learning, & Leveling up one day at a time.</p>
            <ul className="flex items-center gap-5 *:border *:border-white *:p-2.5 *:rounded-full *:text-white ">
                <li><Link href="https://github.com/rodweleo" target="_blank"><Github /></Link></li>
                <li><Link href="https://x.com/rodweleo" target="_blank"><FaXTwitter size={24}  /></Link></li>
                <li><Link href="https://www.linkedin.com/in/rodweleo/" target="_blank"><Linkedin /></Link></li>
                <li><Link href="mailto:leorodwel86@gmail.com"><Mail /></Link></li>
            </ul>
           <nav>
                    <ul className="flex items-center gap-5 *:text-neutral-300">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            <section>
                <p className="text-neutral-300">&copy; {year} Rodwell Leo. All Rights Reserved.</p>
            </section>
        </footer>
    )
}