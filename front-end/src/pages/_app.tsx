import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/layout/Sidebar'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Sidebar />
      <main
        className={`px-8 py-12 min-h-screen w-full text-black font-medium bg-gray-50 ${poppins.className}`}
      >
        <Component {...pageProps} />
      </main>
    </div>
  )
}
