import { CaretDown } from '@phosphor-icons/react'
import { useState } from 'react'

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false)

  const options = [
    {
      id: 0,
      title: 'teste 1',
    },
    {
      id: 1,
      title: 'teste 2',
    },
    {
      id: 2,
      title: 'teste 3',
    },
  ]

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      {/* Button */}
      <button
        className="border-violet-500 border-2 h-10 flex items-center rounded-xl"
        onClick={handleIsOpen}
      >
        <span className="px-6 text-gray-300">Status</span>
        <div className="bg-violet-500 h-full flex items-center justify-center rounded-r-md w-10">
          <CaretDown size={24} color="#FFF" />
        </div>
      </button>

      {/* Content */}
      {isOpen && (
        <div className="absolute right-0 w-full bg-white rounded-xl mt-1 shadow-md overflow-hidden">
          <div className="py-2 px-4 flex items-center justify-center hover:bg-gray-100">
            item 1
          </div>
          <div className="py-2 px-4 flex items-center justify-center hover:bg-gray-100">
            item 2
          </div>
          <div className="py-2 px-4 flex items-center justify-center hover:bg-gray-100">
            item 3
          </div>
          <div className="py-2 px-4 flex items-center justify-center hover:bg-gray-100">
            item 4
          </div>
        </div>
      )}
    </div>
  )
}
