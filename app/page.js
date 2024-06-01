import Image from "next/image";
import Nav from "./components/nav";
import H1 from "./components/h1";

export default function Home() {
    return (
        <main className="flex flex-col content-center items-center">
            <Nav />
            <H1 content="WebStasjon" />
        </main>
    );
}
