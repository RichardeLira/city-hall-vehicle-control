import getIconByName from '@/utils/getIconByName'
import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MouseEvent } from 'react'

interface PageLabelProps {
  path: string
  title: string
  icon: string
  hasSubmenu: boolean
  isSubmenuActive: boolean
  sidebarOpen: boolean
  handleSubmenuActive: () => void
  handleSubmenuContextActive: (event: MouseEvent) => void
}

export default function PageLabel({
  icon,
  title,
  path,
  hasSubmenu,
  isSubmenuActive,
  sidebarOpen,
  handleSubmenuActive,
  handleSubmenuContextActive,
}: PageLabelProps) {
  const pathname = usePathname()
  const pathActive = pathname.includes(path)

  return (
    <div
      className={`flex h-12 w-full items-center overflow-hidden rounded-xl p-3 ${pathActive ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
    >
      {/* Page Label */}
      {sidebarOpen || !hasSubmenu ? (
        <Link
          href={`/${path}`}
          className="flex h-11 flex-1 items-center gap-3 text-base"
        >
          <div className="w-fit">{getIconByName(icon, pathActive, 24)}</div>
          <span
            className={`${pathActive ? 'text-black' : 'hover:text-black'} overflow-hidden whitespace-nowrap`}
          >
            {title}
          </span>
        </Link>
      ) : (
        <button
          onClick={handleSubmenuContextActive}
          className="flex h-11 flex-1 items-center gap-3 text-base"
        >
          <div className="w-fit">{getIconByName(icon, pathActive, 24)}</div>
          <span
            className={`${pathActive ? 'text-black' : 'hover:text-black'} overflow-hidden whitespace-nowrap`}
          >
            {title}
          </span>
        </button>
      )}

      {/* Subpages Arrow */}
      {hasSubmenu && sidebarOpen && (
        <button
          className={`transform ${
            isSubmenuActive ? 'rotate-90' : 'rotate-0'
          } transition duration-300 ease-in-out`}
          onClick={handleSubmenuActive}
        >
          <CaretRight color={isSubmenuActive ? '#000' : '#ABB0B4'} size={24} />
        </button>
      )}
    </div>
  )
}
