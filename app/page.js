"use client";

import { Header } from "@/lib/components/header";
import Nav from "@/lib/components/nav";
import "@/app/globals.css";

export default function Home() {
    return (
        <>
            <Nav />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <Header />
            </main>
        </>
    );
}
