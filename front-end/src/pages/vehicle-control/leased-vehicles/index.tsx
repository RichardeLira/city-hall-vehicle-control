import Searchbox from '@/components/ui/Searchbox'

export default function LeasedVehicles() {
  return (
    <div className="w-full">
      <Searchbox
        placeholder="Procurar por descrição do veículo"
        onSearch={(query) => console.log(query)}
      />
    </div>
  )
}
