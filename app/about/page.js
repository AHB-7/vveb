"use client";

import Nav from "../components/nav";

export default function About() {
    return (
        <main className="flex flex-col content-center items-center">
            <Nav />
            <h1 className="text-4xl font-bold">About</h1>
            <p className="text-lg">This is the about page.</p>
        </main>
    );
}
