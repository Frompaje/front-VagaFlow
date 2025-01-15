import { MenuMobile } from '@/pages/header/menu-mobile'
import Link from 'next/link'

const listNav = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Criar conta',
    href: '/signUp',
  },
]

export const Header = () => {
  return (
    <header>
      <nav className="p-4 flex justify-between">
        <Link href={'/'}>
          <div className="text-xl font-bold text-customGreen">WorkFlow</div>
        </Link>

        <MenuMobile list={listNav} />

        <ul className="hidden lg:flex gap-5 text-customGreen">
          <Link href={'/'}>
            <li className="p-1 cursor-pointer rounded-lg hover:bg-white transition ease-in-out duration-200">
              Home
            </li>
          </Link>
          <Link href={'/signIn'}>
            <li className="p-1 cursor-pointer rounded-lg hover:bg-white transition ease-in-out duration-200">
              Login
            </li>
          </Link>
          <Link href={'/signUp'}>
            <li className="bg-white border-1 rounded-lg cursor-pointer p-1 hover:bg-customGreen hover:text-white transition ease-in-out duration-300">
              Criar conta
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
