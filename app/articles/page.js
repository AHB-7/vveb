import Nav from '../components/nav'

export default function Page() {
  return (
    <main className="flex flex-col content-center items-center">
      <Nav />
      <h1 className="text-4xl font-bold">Page</h1>
      <p className="text-lg">This is the page page.</p>
    </main>
  )
}
