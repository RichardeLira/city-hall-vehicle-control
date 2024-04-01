import { Button, ButtonProps } from '@/lib/shadcnui/button'

export default function CustomButton({ onClick, children }: ButtonProps) {
  return (
    <Button onClick={onClick} className="bg-violet-500 hover:bg-violet-400">
      {children}
    </Button>
  )
}
