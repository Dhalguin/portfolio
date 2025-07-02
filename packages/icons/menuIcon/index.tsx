import { IconProps } from '../types'

export const MenuIcon: React.FC<IconProps> = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h16" />
      <path d="M4 18h16" />
      <path d="M4 6h16" />
    </svg>
  )
}
