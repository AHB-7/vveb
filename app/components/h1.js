export default function H1({ content, content2 }) {
  return (
    <>
      <h1 className="tracking-tight text-4xl md:text-7xl text-center font-bold bg-clip-text text-transparent bg-[linear-gradient(to_left,#134B57,#228094,#000,#000,#228094,#134B57)] bg-[length:200%_auto] animate-gradient">
        {content} <br />
        {content2}
      </h1>
    </>
  )
}
