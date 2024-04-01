import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/lib/shadcnui/select'

interface FilterProps {
  placeholder: string
  options: string[]
  selectedOption: string | null
  setSelectedOption: (option: string | null) => void
}

export default function SortFilter({
  placeholder,
  options,
  selectedOption,
  setSelectedOption,
}: FilterProps) {
  return (
    <Select onValueChange={(option) => setSelectedOption(option)}>
      <SelectTrigger className="w-[240px] focus:ring-offset-0 focus:ring-0">
        {selectedOption ? (
          <SelectValue>
            <span className="text-gray-500">Ordenar por: {''}</span>
            <span>{selectedOption}</span>
          </SelectValue>
        ) : (
          <span className="text-gray-500">Ordenar por: {placeholder}</span>
        )}
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
