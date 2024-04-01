import { SidebarData } from '../../../data/SidebarData'
import Link from 'next/link'
import { CaretLeft, User } from '@phosphor-icons/react'
import { useState } from 'react'
import Page from './Page'

export default function Sidebar() {
  const [isSidebarActive, setIsSidebarActive] = useState(true)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const handleSubmenuToggle = (path: string) => {
    setActiveSubmenu(activeSubmenu === path ? null : path)
  }

  return (
    <div
      className={`${isSidebarActive ? 'w-[360px]' : 'w-[96px]'} relative flex h-screen flex-none flex-col bg-white font-medium transition-all duration-1000 ease-in-out`}
    >
      {/* Upper section */}
      <div className="relative p-8 pb-16">
        <Link href="/">
          <h2 className="font-semibold">SGF</h2>
        </Link>
        <button
          className={`absolute right-0 flex h-11 w-11 translate-x-1/2 transform items-center justify-center rounded-full bg-gray-50 transition duration-300 ease-in-out ${isSidebarActive ? 'rotate-0' : 'rotate-180'}`}
          onClick={() => setIsSidebarActive(!isSidebarActive)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-50 hover:bg-violet-100">
            <CaretLeft
              size={24}
              className="text-violet-400 hover:text-violet-500"
            />
          </div>
        </button>
      </div>

      {/* Separator */}
      <div className="h-[6px] w-full bg-gray-50" />

      {/* Pages */}
      <div className="scrollbar-track-white scrollbar-thin scrollbar-thumb-gray-200 flex-1 overflow-y-auto px-6 py-8 text-gray-300">
        <ul className="flex flex-col gap-2">
          {SidebarData.map((page) => (
            <Page
              key={page.path}
              icon={page.icon}
              title={page.title}
              path={page.path}
              submenu={page.submenu}
              sidebarOpen={isSidebarActive}
              isActive={activeSubmenu === page.path}
              onSubmenuToggle={handleSubmenuToggle}
            />
          ))}
        </ul>
      </div>

      {/* Separator */}
      <div className="h-[6px] w-full bg-gray-50" />

      {/* Bottom section */}
      <div className="flex gap-3 overflow-hidden p-6">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gray-100">
          <User size={24} />
        </div>
        {isSidebarActive && (
          <div>
            <h3 className="font-semibold">Usuário</h3>
            <span className="text-gray-300">Cargo</span>
          </div>
        )}
      </div>
    </div>
  )
}
