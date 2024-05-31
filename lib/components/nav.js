import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className=" text-xl ">
            <Link
                className={`link ${pathname === "/" ? "active" : ""}`}
                href="/"
            >
                Home
            </Link>

            <Link
                className={`link ${pathname === "/about" ? "active" : ""}`}
                href="/about"
            >
                About
            </Link>
        </nav>
    );
}
