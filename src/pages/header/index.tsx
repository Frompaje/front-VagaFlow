'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const listNav = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Login',
    href: '/signIn',
  },
  {
    name: 'Criar conta',
    href: '/signUp',
  },
]

export const Header = () => {
  const [swithMenu, setSwithMenu] = useState(false)

  const handleSwitchMenu = () => setSwithMenu(!swithMenu)

  return (
    <header>
      <nav className="p-2 flex justify-between">
        <div className="text-xl font-bold">
          WorkFlow
          <span className="text-emerald-700">BETA</span>
        </div>

        <button onClick={handleSwitchMenu}>
          {swithMenu ? <X /> : <Menu />}
        </button>

        {swithMenu && (
          <ul className="absolute top-10 bg-white text-black left-0 right-0">
            {listNav.map((value) => (
              <Link href={value.href} key={value.name}>
                <li className="p-1 hover:bg-gray-100 cursor-pointer rounded">
                  {value.name}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
