import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/lib/shadcnui/select'

interface FilterProps {
  placeholder: string
  options: string[]
  selectedOption: string
  setSelectedOption: (option: string) => void
}

export default function Filter({
  placeholder,
  options,
  selectedOption,
  setSelectedOption,
}: FilterProps) {
  return (
    <Select
      value={selectedOption}
      onValueChange={(option) => setSelectedOption(option)}
    >
      <SelectTrigger className="w-[180px] focus:ring-offset-0 focus:ring-0">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{placeholder}</SelectLabel>
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
