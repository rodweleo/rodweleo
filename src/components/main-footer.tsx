"use client"

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function MainFooter() {
    const year = new Date().getFullYear();

    return (
        <footer className="grid grid-cols-1 place-items-center space-y-5 py-5">
            <ul className="flex items-center gap-5">
                <li><Link href="https://github.com/rodweleo" target="_blank"><Github /></Link></li>
                <li><Link href="https://www.linkedin.com/in/rodweleo/" target="_blank"><Linkedin /></Link></li>
                <li><Link href="mailto:leorodwel86@gmail.com"><Mail /></Link></li>
            </ul>
            <section className="flex items-center justify-center flex-wrap gap-5">
                <nav>
                    <ul className="flex items-center gap-5">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </section>
            <section>
                <p className="text-slate-600">&copy; {year} Rodwell Leo. All Rights Reserved.</p>
            </section>
        </footer>
    )
}