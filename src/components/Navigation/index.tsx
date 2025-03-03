
import MainNav from "@/components/main-nav";
import Link from "next/link";
export default function Navigation(){
    return (
        <header className="shadow-md sticky top-0 z-50 bg-white/70 backdrop-blur-md">
            <section className="flex items-center container justify-between p-5">
                <Link href="/" className="flex items-center gap-2"> <h1 className="text-lg font-semibold tracking-wide text-blue-500"><span className=" font-bold">{'<'}</span>Rodwell Leo<span className="font-bold">{'/>'}</span></h1></Link>
                <MainNav />
            </section>
        </header>
    )
}