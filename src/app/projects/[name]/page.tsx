/* eslint-disable @next/next/no-img-element */
'use client'

import { projects } from '@/app/constants/projects'
import { Catamaran } from 'next/font/google'
import { useParams, useRouter } from 'next/navigation'

const catamaran = Catamaran({
  subsets: ['latin'],
})

export default function ProjectDetail() {
  const { name } = useParams()

  const projectName = String(name).split('-').join(' ')
  const project = projects.find(project => project.name === projectName)

  const router = useRouter()

  return (
    <section className={`${catamaran.className} min-h-screen py-8`}>
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl md:text-5xl">{projectName}</h1>
        <p className="text-base md:text-lg">{project?.description}</p>
      </div>
      <div className="flex flex-col gap-3 w-full md:flex-row md:gap-8">
        <div className="flex-1">
          <p className="whitespace-pre-line text-base md:text-lg">{project?.details}</p>
        </div>
        <div className="min-h-full w-[1px] bg-gray-400" />
        <div className="flex-1">
          <div>
            <h3 className="text-xl md:text-2xl">Resumen tecnico:</h3>
            <ul className="ml-6" style={{ listStyleType: 'disc' }}>
              {project?.techSummary.map((work, index) => (
                <li key={index} className="my-2 text-base md:text-lg">
                  {work}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center md:mt-10">
        {project?.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={String(index)}
            className="w-full my-4 rounded-xl shadow-md shadow-gray-500 md:w-3/4"
          />
        ))}
      </div>
      <div className="flex justify-end">
        <button
          className="tracking-widest border-solid border-2 border-white p-2 rounded-lg min-w-60 w-full md:w-fit md:mt-6"
          onClick={() => router.back()}
        >
          Volver
        </button>
      </div>
    </section>
  )
}
