import Link from "next/link";
import ResumeModal from "./ResumeModal";

export default function Navigation() {
    return (
        <header className="px-[3%] sticky top-0 left-0 right-0 z-[100] bg-[#1C0C4E] text-[#FFFFFF] shadow-md flex justify-between">
            <div className="h-16 hidden md:flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-wide">
                    N.Z.
                </Link>
            </div>
            <div className="flex justify-center items-center space-x-8 text-[10px] md:text-lg md:font-medium">
                <Link href="/" className="hover:underline active:opacity-[0.5]">Home</Link>
                <Link href="/about" className="hover:underline active:opacity-[0.5]">About</Link>
                <Link href="/certifications" className="hover:underline active:opacity-[0.5]">Certificates</Link>
                <Link href="/projects" className="hover:underline active:opacity-[0.5]">Projects</Link>
                <Link href="/contact" className="hover:underline active:opacity-[0.5]">Contact</Link>
            </div>
            <div className="flex justify-center items-center">
                <ResumeModal />
            </div>
        </header>
    )
}