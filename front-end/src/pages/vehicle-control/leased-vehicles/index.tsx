import Filter from '@/components/ui/Filter'
import Searchbox from '@/components/ui/Searchbox'
import { Teste } from '@/components/ui/Teste'

export default function LeasedVehicles() {
  const handleSearch = (query: string) => {
    console.log(query)
  }

  return (
    <div className="w-full h-full">
      <div className="w-full">
        <Searchbox
          placeholder="Procurar por descrição do veículo"
          onSearch={handleSearch}
        />
        <div className="flex gap-2 mt-4 items-center">
          <h1 className="text-2xl">Veículos Locados</h1>
          <Teste />
          {/* <Filter />
          <Filter /> */}
        </div>
      </div>
      {/* Table */}
    </div>
  )
}
