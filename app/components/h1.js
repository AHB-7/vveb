export default function H1({ content }) {
    return (
        <h1 className="py-5 text-6xl md:text-8xl text-center font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.amber.400),theme(colors.amber.100),theme(colors.blue.400),theme(colors.blue.400),theme(colors.blue.400),theme(colors.amber.100),theme(colors.amber.400))] bg-[length:200%_auto] animate-gradient">
            {content}
        </h1>
    );
}
