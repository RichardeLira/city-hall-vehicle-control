import CustomButton from '@/components/ui/Button'
import Filter from '@/components/ui/Filter'
import Searchbox from '@/components/ui/Searchbox'
import SortFilter from '@/components/ui/SortFilter'
import { useState } from 'react'

export default function LeasedVehicles() {
  const [sortFilter, setSortFilter] = useState<string | null>(null)
  const [ownerFilter, setOwnerFilter] = useState<string>('')
  const [yearFilter, setYearFilter] = useState<string>('')

  const resetFilters = () => {
    setSortFilter(null)
    setOwnerFilter('')
    setYearFilter('')
  }

  const handleSearch = (query: string) => {
    console.log(query)
  }

  return (
    <div className="h-full w-full">
      <div className="w-full">
        <Searchbox
          placeholder="Procurar por descrição do veículo"
          onSearch={handleSearch}
        />
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl">Veículos Locados</h1>
            <Filter
              placeholder="Ano"
              options={['2010', '2012', '2013', '2014', '2015']}
              selectedOption={yearFilter}
              setSelectedOption={setYearFilter}
            />
            <Filter
              placeholder="Proprietário"
              options={['Maria', 'João', 'Fernando', 'José', 'Enaldo']}
              selectedOption={ownerFilter}
              setSelectedOption={setOwnerFilter}
            />
          </div>

          <div className="flex items-center gap-2">
            <CustomButton onClick={resetFilters}>
              Redefinir Filtros
            </CustomButton>
            <SortFilter
              placeholder="-"
              options={['Ano', 'Marca', 'Proprietário']}
              selectedOption={sortFilter}
              setSelectedOption={setSortFilter}
            />
          </div>
        </div>
      </div>
      {/* Table */}
    </div>
  )
}
