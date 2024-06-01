import Nav from './components/nav'
import H1 from './components/h1'

export default function Home() {
  return (
    <main className="flex flex-col content-center items-center">
      <Nav />
      <header className="flex flex-col content-center items-ceter">
        <div>
          <H1 content="VIKEN" content2="GULLVERKESTED" />
        </div>

        <p className="text-lg">
          Med førti års erfaring vil vi hjelpe deg med å finne den perfekte
          løsningen deg og dine.
        </p>
      </header>
    </main>
  )
}
