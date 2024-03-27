import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from './layout/Sidebar'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Sidebar />
      <main
        className={`min-h-screen w-full text-gray-900 font-medium bg-gray-50 ${poppins.className}`}
      >
        <Component {...pageProps} />
      </main>
    </div>
  )
}
