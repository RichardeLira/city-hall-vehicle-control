import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col text-black">
      <span>Hello World</span>
      <button>
        <Link href="/municipal-vehicles">Municipal Vehicles</Link>
      </button>
    </div>
  )
}
