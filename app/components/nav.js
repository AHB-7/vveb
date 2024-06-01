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
  const defualtState = `shadow-lg shadow-salty-500 bg-gradient-to-r from-brand-950 to-natural-600 border rounded-md h-8 w-20 flex place-content-center place-items-center`
  const hoverState = `hover:text-amber-200 transition-colors duration-400`

  return (
    <nav className="inline-flex gap-4 my-4">
      <Link
        href="/"
        className={`${defualtState} ${
          pathname === '/'
            ? `${colorstyles['brand-light']} ${buttonStyles['button-primary']}`
            : colorstyles['brand-dark']
        } ${hoverState}`}
      >
        <CgScreen /> <p>Home</p>
      </Link>
      <Link
        href="/articles"
        className={`${defualtState} ${
          pathname === '/articles'
            ? colorstyles['brand-light']
            : colorstyles['brand-dark']
        } ${hoverState}`}
      >
        <GrArticle /> <p>Articles</p>
      </Link>
      <Link
        href="/about"
        className={`${defualtState} ${
          pathname === '/about'
            ? colorstyles['brand-light']
            : colorstyles['brand-dark']
        } ${hoverState}`}
      >
        <SiInformatica /> <p>About</p>
      </Link>
    </nav>
  )
}
