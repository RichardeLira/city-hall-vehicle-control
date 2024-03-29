import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SubmenuSchema {
  path: string
  title: string
}

interface SubPageProps {
  items: SubmenuSchema[]
  parentPath: string
  isSubmenuActive: boolean
}

export default function SubPages({
  items,
  parentPath,
  isSubmenuActive,
}: SubPageProps) {
  const pathname = usePathname()

  return (
    <div
      className={`transition-all duration-1000 flex ${isSubmenuActive ? 'mt-2 max-h-32' : 'max-h-0'}`}
    >
      <div className="w-1 rounded ml-5 h-auto bg-gray-300"></div>
      <ul className="flex w-full overflow-y-auto flex-col gap-1 text-sm pl-6 scrollbar-track-white scrollbar-thin scrollbar-thumb-gray-200">
        {items?.map((subpage) => (
          <li
            key={subpage.path}
            className={`hover:text-black ${
              pathname.includes(subpage.path) ? 'text-black' : 'text-gray-300'
            }`}
          >
            <Link
              href={`/${parentPath}/${subpage.path}`}
              className="flex gap-2"
            >
              <span>{subpage.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
