import { MagnifyingGlass } from '@phosphor-icons/react'
import { useState } from 'react'

interface SearchboxProps {
  placeholder: string
  onSearch: (query: string) => void
}

export default function Searchbox({ placeholder, onSearch }: SearchboxProps) {
  const [query, setQuery] = useState('')

  // Função para lidar com a mudança no campo de pesquisa
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setQuery(value)
  }

  // Função para lidar com o envio da pesquisa ao pressionar Enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onSearch(query)
    }
  }

  return (
    <div className="w-full p-4 gap-2 text-sm rounded-xl h-14 bg-white flex items-center">
      <MagnifyingGlass size={24} color="#ABB0B4" />
      <input
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder={placeholder}
        className="flex-1 placeholder:text-gray-300 outline-none"
      />
      <span>Qua 15 Junho, 12:10:22</span>
    </div>
  )
}
