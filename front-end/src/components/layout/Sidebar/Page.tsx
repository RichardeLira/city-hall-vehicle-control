import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import getIconByName from '../../../utils/getIconByName'

interface SubmenuSchema {
  path: string
  title: string
}

interface PageProps {
  path: string
  title: string
  icon: string
  submenu?: SubmenuSchema[]
  sidebarOpen: boolean
}

export default function Page({
  path,
  title,
  icon,
  submenu,
  sidebarOpen,
}: PageProps) {
  const pathname = usePathname()
  const pathActive = pathname.includes(path)

  const [isSubmenuActive, setIsSubmenuActive] = useState(false)

  const handleSubmenuActive = () => {
    setIsSubmenuActive(!isSubmenuActive)
  }

  return (
    <li>
      <div>
        {/* Active Highlight */}
        {pathname.includes(path) && (
          <div className="w-2 h-12 absolute left-0 bg-violet-400 rounded-r-xl" />
        )}

        <div className="h-12 flex items-center w-full">
          {/* Page */}
          <div
            className={`flex h-11 w-full items-center p-2 rounded-xl ${pathActive ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
          >
            {/* Page Label */}
            <Link
              href={`/${path}`}
              className="flex items-center gap-2 h-11 w-full text-base"
            >
              {getIconByName(icon, pathActive, 24)}
              {sidebarOpen && (
                <span
                  className={`${pathActive ? 'text-black' : 'hover:text-black'} flex-1`}
                >
                  {title}
                </span>
              )}
            </Link>

            {/* Subpages Arrow */}
            {submenu && (
              <button
                className={`transform ${
                  isSubmenuActive ? 'rotate-90' : 'rotate-0'
                } transition duration-300 ease-in-out`}
                onClick={handleSubmenuActive}
              >
                <CaretRight
                  color={isSubmenuActive ? '#000' : '#ABB0B4'}
                  size={24}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Subpages */}
      <ul
        className={`overflow-hidden overflow-y-auto px-10 text-sm transition-all duration-1000 scrollbar-thin scrollbar-thumb-gray-200 ${
          isSubmenuActive ? 'max-h-32' : 'max-h-0'
        }`}
      >
        {submenu?.map((subpage) => (
          <li
            key={subpage.path}
            className={`hover:text-black ${
              pathname.includes(`${path}/${subpage.path}`)
                ? 'text-black'
                : 'text-gray-300'
            }`}
          >
            <Link href={`/${path}/${subpage.path}`}>
              <span>{subpage.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}
