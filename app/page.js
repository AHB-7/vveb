import Nav from './components/nav'
import H1 from './components/h1'
import Image from 'next/image'

import imgStyles from './styles/sass/images.module.scss'

export default function Home() {
  return (
    <main className="flex flex-col content-center items-center">
      <Nav />
      <header className="flex flex-col content-center items-ceter">
        {/* <Image
          className={`opacity-50 bg-blend-difference brightness-50 filter blur-xl ${imgStyles['img']}`}
          src="https://img.freepik.com/free-photo/abstract-gold-chain-jewellery-presentation_23-2149599059.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Abstract gold chain jewellery presentation"
        /> */}
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
