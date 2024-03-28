import Page from './Page'
import { SidebarData } from '../../../data/SidebarData'
import Link from 'next/link'
import { CaretLeft } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Sidebar() {
  const [isSidebarActive, setIsSidebarActive] = useState(true)

  return (
    <div
      className={`${isSidebarActive ? 'w-[360px]' : 'w-[200px]'} transition-all duration-1000 ease-in-out flex-none h-screen flex flex-col font-medium bg-white`}
    >
      {/* Upper section */}
      <div className="relative p-8 pb-16">
        <Link href="/">
          <h2 className="font-semibold">SGF platform</h2>
        </Link>
        <button
          className="absolute right-0 translate-x-1/2 w-11 h-11 bg-gray-50 rounded-full flex items-center justify-center"
          onClick={() => setIsSidebarActive(!isSidebarActive)}
        >
          <div className="w-8 h-8 rounded-full bg-violet-50 hover:bg-violet-100 flex items-center justify-center">
            <CaretLeft
              size={24}
              className="text-violet-400 hover:text-violet-500"
            />
          </div>
        </button>
      </div>

      {/* Separator */}
      <div className="w-full h-[6px] bg-gray-50" />

      {/* Pages */}
      <div className="flex-1 pl-6 p-8 text-gray-300">
        <ul>
          {SidebarData.map((page) => (
            <Page
              key={page.path}
              icon={page.icon}
              title={page.title}
              path={page.path}
              submenu={page.submenu}
              sidebarOpen={isSidebarActive}
            />
          ))}
        </ul>
      </div>

      {/* Separator */}
      <div className="w-full h-[6px] bg-gray-50" />

      {/* Bottom section */}
      <div className="p-8">
        <h3 className="font-semibold">Usuário</h3>
        <span className="text-gray-300">Cargo</span>
      </div>
    </div>
  )
}
