"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="inline-flex gap-4 my-4">
            <Link
                href="/"
                className={`${
                    pathname === "/" ? "text-amber-300" : "text-slate-200"
                } hover:text-amber-200 transition-colors duration-400`}
            >
                <p>Home</p>
            </Link>
            <Link
                href="/articles"
                className={`${
                    pathname === "/articles"
                        ? "text-amber-300"
                        : "text-slate-200"
                } hover:text-amber-200 transition-colors duration-400`}
            >
                <p>Articles</p>
            </Link>
            <Link
                href="/about"
                className={`${
                    pathname === "/about" ? "text-amber-300" : "text-slate-200"
                } hover:text-amber-200 transition-colors duration-400`}
            >
                <p>About</p>
            </Link>
        </nav>
    );
}
