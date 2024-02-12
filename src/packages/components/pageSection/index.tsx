import { ReactNode } from 'react'

interface IPageSectionProps {
  children: JSX.Element | JSX.Element[]
  title?: string
  className?: string
}

export default function PageSection({ title, className, children }: IPageSectionProps): ReactNode {
  return (
    <div>
      <section className={`flex flex-col my-10 gap-10 ${className}`}>
        {title && <h2 className="text-3xl md:text-5xl">{title}</h2>}
        {children}
      </section>
      <div className="bg-zinc-900 h-1 w-full" />
    </div>
  )
}
