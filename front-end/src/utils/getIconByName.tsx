import { Car, GasCan, HandCoins } from '@phosphor-icons/react'

const getIconByName = (iconName: string, isActive: boolean, size: number) => {
  switch (iconName) {
    case 'Car':
      return <Car size={size} color={isActive ? '#9579E5' : '#ABB0B4'} />
    case 'Cost':
      return <GasCan size={size} color={isActive ? '#9579E5' : '#ABB0B4'} />
    case 'Bill':
      return <HandCoins size={size} color={isActive ? '#9579E5' : '#ABB0B4'} />
    default:
      return null
  }
}

export default getIconByName
