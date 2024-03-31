import { CaretDown } from '@phosphor-icons/react'

export default function Filter() {
  return (
    <div className="border-violet-500 border-2 h-10 flex items-center justify-end rounded-xl">
      {/* <span className="px-4">Teste</span> */}
      <select className="outline-none appearance-none rounded-none px-4 bg-gray-50">
        <option>Teste</option>
        <option>Teste2</option>
        <option>Teste3</option>
      </select>
      <div className="bg-violet-500 h-full flex items-center justify-center rounded-r-md w-10">
        <CaretDown size={24} color="#FFF" />
      </div>
    </div>
  )
}
