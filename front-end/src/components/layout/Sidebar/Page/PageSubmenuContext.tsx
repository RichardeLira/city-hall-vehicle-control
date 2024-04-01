import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SubmenuSchema {
  path: string
  title: string
}

interface PageSubmenuContextProps {
  path: string
  title: string
  submenu: SubmenuSchema[]
}

export default function PageSubmenuContext({
  path,
  title,
  submenu,
}: PageSubmenuContextProps) {
  const pathname = usePathname()

  return (
    <div className="absolute right-0 w-fit translate-x-full rounded-lg border-[1px] border-gray-100 bg-white shadow-md">
      <ul>
        <li
          className={`whitespace-nowrap p-2 hover:bg-gray-100 hover:text-black ${pathname.includes(path) ? 'text-black' : 'text-gray-300'}`}
        >
          <Link href={`/${path}`}>{title}</Link>
        </li>
        <li className="h-px bg-gray-100"></li>
        {submenu.map((subpage) => (
          <li
            key={subpage.path}
            className={`whitespace-nowrap p-2 hover:bg-gray-100 hover:text-gray-500 ${pathname.includes(subpage.path) ? 'text-black' : 'text-gray-300'}`}
          >
            <Link href={`/${path}/${subpage.path}`}>{subpage.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
