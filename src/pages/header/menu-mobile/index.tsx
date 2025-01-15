'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface navItem {
  name: string
  href: string
}
type Props = {
  list: navItem[]
}

export const MenuMobile = ({ list }: Props) => {
  const [swithMenu, setSwithMenu] = useState(false)

  const handleSwitchMenu = () => setSwithMenu(!swithMenu)

  return (
    <div className="lg:hidden">
      <button className="text-customGreen" onClick={handleSwitchMenu}>
        {swithMenu ? <X /> : <Menu />}
      </button>

      {swithMenu && (
        <ul className="absolute top-10 bg-white text-customGreen left-0 right-0 rounded m-1 p-1">
          {list.map((value) => (
            <Link href={value.href} key={value.name}>
              <li className="p-1 hover:bg-customGreen hover:text-white cursor-pointer rounded">
                {value.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  )
}
