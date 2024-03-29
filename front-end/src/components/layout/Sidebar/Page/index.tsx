import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import PageLabel from './PageLabel'
import SubPages from './SubPages'
import PageSubmenuContext from './PageSubmenuContext'

interface SubmenuSchema {
  path: string
  title: string
}

interface PageProps {
  path: string
  title: string
  icon: string
  submenu: SubmenuSchema[]
  sidebarOpen: boolean
  isActive: boolean
  onSubmenuToggle: (path: string) => void
}

export default function Page({
  path,
  title,
  icon,
  submenu,
  sidebarOpen,
  isActive,
  onSubmenuToggle,
}: PageProps) {
  const [isSubmenuActive, setIsSubmenuActive] = useState(false)
  const [isSubmenuContextActive, setIsSubmenuContextActive] = useState(false)

  const pathname = usePathname()

  const handleSubmenuActive = () => {
    setIsSubmenuActive(!isSubmenuActive)
  }

  useEffect(() => {
    setIsSubmenuContextActive(isActive)
  }, [isActive])

  useEffect(() => {
    const closeMenu = () => {
      setIsSubmenuContextActive(false)
    }

    if (isSubmenuContextActive) {
      document.addEventListener('click', closeMenu)
    } else {
      document.removeEventListener('click', closeMenu)
    }

    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [isSubmenuContextActive])

  useEffect(() => {
    setIsSubmenuActive(false)
    setIsSubmenuContextActive(false)
  }, [sidebarOpen])

  return (
    <li>
      {isSubmenuContextActive && (
        <PageSubmenuContext path={path} title={title} submenu={submenu} />
      )}
      <div>
        {/* Active Highlight */}
        {pathname.includes(path) && (
          <div className="w-2 h-[52px] absolute left-0 bg-violet-400 rounded-r-xl" />
        )}

        {/* Page Label */}
        <div className="h-[52px] flex items-center w-full">
          <PageLabel
            key={path}
            icon={icon}
            hasSubmenu={submenu.length > 0}
            isSubmenuActive={isSubmenuActive}
            path={path}
            title={title}
            sidebarOpen={sidebarOpen}
            handleSubmenuActive={handleSubmenuActive}
            handleSubmenuContextActive={() => onSubmenuToggle(path)}
          />
        </div>
      </div>

      {/* Subpages */}
      {sidebarOpen && submenu && (
        <SubPages
          items={submenu}
          parentPath={path}
          isSubmenuActive={isSubmenuActive}
        />
      )}
    </li>
  )
}
