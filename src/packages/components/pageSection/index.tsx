import { ReactNode } from 'react'

interface IPageSectionProps {
  children: JSX.Element | JSX.Element[]
  className?: string
}

export default function PageSection({ className, children }: IPageSectionProps): ReactNode {
  return (
    <div>
      <section className={`flex flex-col gap-10 my-10 ${className}`}>{children}</section>
      <div className="bg-zinc-900 h-1 w-full" />
    </div>
  )
}
