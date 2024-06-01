"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgScreen } from "react-icons/cg";
import { GrArticle } from "react-icons/gr";
import { SiInformatica } from "react-icons/si";

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="inline-flex gap-4 my-4">
            <Link
                href="/"
                className={`border rounded-md h-8 w-20 flex place-content-center place-items-center ${
                    pathname === "/" ? "text-amber-300 " : "text-slate-200"
                } hover:text-amber-200 transition-colors duration-400`}
            >
                <CgScreen /> <p>Home</p>
            </Link>
            <Link
                href="/articles"
                className={`border rounded-md h-12 w-16 flex flex-col place-content-center place-items-center ${
                    pathname === "/articles"
                        ? "text-amber-300"
                        : "text-slate-200"
                } hover:text-amber-200 transition-colors duration-400`}
            >
                <GrArticle /> <p>Articles</p>
            </Link>
            <Link
                href="/about"
                className={`border rounded-md h-12 w-16 flex flex-col place-content-center place-items-center ${
                    pathname === "/about" ? "text-amber-300" : "text-slate-200"
                } hover:text-amber-200 transition-colors duration-400`}
            >
                <SiInformatica /> <p>About</p>
            </Link>
        </nav>
    );
}
