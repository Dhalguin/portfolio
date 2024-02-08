/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

interface ProjectCardIProps {
  name: string
  description: string
  image: string
  skills: string
  route: string
}

export default function ProjectCard({
  name,
  description,
  image,
  skills,
  route,
}: ProjectCardIProps) {
  return (
    <div className="w-1/2 flex justify-center animation">
      <Link href={route} className="w-fit">
        <div className="flex flex-col items-center gap-3 w-fit">
          <div className="flex flex-col items-center w-fit">
            <span className="text-xl">{name}</span>
            <span className="text-gray-400">{description}</span>
          </div>
          <img
            src={image}
            alt="image"
            className="w-1/2 my-4 rounded-xl shadow-md shadow-gray-500 min-w-72 min-h-72"
          />
          <div className="m-auto">
            <span>{skills}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
