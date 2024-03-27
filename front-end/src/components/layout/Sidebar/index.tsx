import { Car, CaretDown } from '@phosphor-icons/react'

export default function Sidebar() {
  return (
    <div className="w-96 h-screen flex flex-col font-medium bg-white">
      {/* Upper section */}
      <div className="p-8">
        <h2 className="font-semibold">SGF platform</h2>
      </div>

      {/* Separator */}
      <div className="w-full h-[6px] bg-gray-50" />

      {/* Pages */}
      <div className="flex-1 p-8 text-gray-300">
        <ul>
          <li>
            <button className="flex w-full text-base hover:bg-gray-50 p-2 rounded-xl">
              <div className="flex flex-1 gap-2">
                {/* <Car color="#9579E5" size={24} /> */}
                <Car color="#ABB0B4" size={24} />
                <span className="">Controle de Veículos</span>
              </div>
              <CaretDown color="#000" size={24} />
            </button>

            <ul className="px-10 py-2 text-sm">
              <li>Veículos municipais</li>
              <li>Veículos locados</li>
              <li>Veículos cedidos</li>
            </ul>
          </li>
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
