export default function H1({ content }) {
    return (
        <>
            <h1 className="py-5 text-6xl md:text-8xl text-center font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,#134B57,#228094,#FFC107,#FFD147,#228094,#134B57)] bg-[length:200%_auto] animate-gradient">
                {content}
            </h1>
        </>
    );
}
