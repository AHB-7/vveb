'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CgScreen } from 'react-icons/cg'
import { GrArticle } from 'react-icons/gr'
import { SiInformatica } from 'react-icons/si'

import colorstyles from '../styles/sass/color.module.scss'
import buttonStyles from '../styles/sass/buttons.module.scss'

// import buttonStyles from '../styles/sass/buttons.module.scss'

export default function Nav() {
  const pathname = usePathname()
  const defualtState =
    'hidden md:flex text-brand-950 w-4/12 flex place-content-center place-items-center font-semibold'
  const hoverState = `hover:text-brand-800 transition-colors duration-400 ease-in-out`

  return (
    <nav className=" container inline-flex align-middle justify-between shadow-md shadow-brand-700 my-0 rounded-lg w-full h-14">
      <Link
        href="/"
        className={`${defualtState} ${
          pathname === '/' ? 'text-brand-800' : `${defualtState}`
        } ${hoverState}`}
      >
        <CgScreen /> <p>Home</p>
      </Link>
      <Link
        href="/articles"
        className={`${defualtState} ${
          pathname === '/articles' ? 'text-brand-800' : `${defualtState}`
        } ${hoverState}`}
      >
        <GrArticle /> <p>Articles</p>
      </Link>
      <Link
        href="/about"
        className={`${defualtState} ${
          pathname === '/about' ? 'text-brand-800' : `${defualtState}`
        } ${hoverState}`}
      >
        <SiInformatica /> <p>About</p>
      </Link>
    </nav>
  )
}
