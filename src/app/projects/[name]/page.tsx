/* eslint-disable @next/next/no-img-element */
'use client'

import { projects } from '@/app/constants/projects'
import dayjs from 'dayjs'
import { Catamaran } from 'next/font/google'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const catamaran = Catamaran({
  subsets: ['latin'],
})

export default function ProjectDetail() {
  const { name } = useParams()

  const projectName = String(name).split('-').join(' ')
  const project = projects.find(project => project.name === projectName)

  return (
    <section className={`${catamaran.className} min-h-screen py-8`}>
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-5xl">{projectName}</h1>
        <p className="text-xl">{project?.description}</p>
      </div>
      <div className="flex gap-8 w-full">
        <div className="flex-1">
          <p className="whitespace-pre-line text-lg">{project?.details}</p>
        </div>
        <div className="min-h-full w-[1px] bg-gray-400" />
        <div className="flex-1">
          <div>
            <h3 className="text-2xl">Resumen tecnico:</h3>
            <ul className="ml-6" style={{ listStyleType: 'disc' }}>
              {project?.techSummary.map((work, index) => (
                <li key={index} className="my-2 text-lg">
                  {work}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center">
        {project?.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={String(index)}
            className="w-3/4 my-4 rounded-xl shadow-md shadow-gray-500"
          />
        ))}
      </div>
    </section>
  )
}
