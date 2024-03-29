import { Car, GasCan, House, Money } from '@phosphor-icons/react'

const getIconByName = (iconName: string, isActive: boolean, size: number) => {
  switch (iconName) {
    case 'Home':
      return <House size={size} color={isActive ? '#9579E5' : '#ABB0B4'} />
    case 'Car':
      return <Car size={size} color={isActive ? '#9579E5' : '#ABB0B4'} />
    case 'Cost':
      return <GasCan size={size} color={isActive ? '#9579E5' : '#ABB0B4'} />
    case 'Bill':
      return <Money size={size} color={isActive ? '#9579E5' : '#ABB0B4'} />

    default:
      return null
  }
}

export default getIconByName
