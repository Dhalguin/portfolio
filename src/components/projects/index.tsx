'use client'

import { useEffect, useState } from 'react'
import ProjectCard from './card'
import { projects } from '@/app/constants/projects'
import { ArrowRight, ArrowLeft } from '@/packages/icons'

export default function Projects() {
  const [index, setIndex] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const totalProjects = projects.length - 1

  const nextProject = () => {
    if (index >= totalProjects) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const prevProject = () => {
    if (index <= 0) {
      setIndex(totalProjects)
    } else {
      setIndex(index - 1)
    }
  }

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)')) {
      setIsMobile(true)
    }
  }, [])

  return (
    <section className="flex flex-col gap-10 my-10">
      <h2 className="text-5xl">Proyectos</h2>
      <div className="">
        <div className="flex gap-6 w-full justify-between lg:justify-center">
          <button
            className="bg-gradient-to-l from-[#02142e]/[.4] to-[#053b6a]/[.8] px-3 rounded-s-xl rounded-e-xl"
            style={{ fontSize: '30px' }}
            onClick={() => prevProject()}
          >
            <i>
              <ArrowLeft width={isMobile ? 20 : 50} height={isMobile ? 40 : 100} fill="white" />
            </i>
            <span className="sr-only">Previous</span>
          </button>
          <ProjectCard
            image={projects[index].preview}
            name={projects[index].name}
            description={projects[index].description}
            skills={projects[index].skills}
            route={projects[index].route}
          />
          <button
            className="bg-gradient-to-r from-[#02142e]/[.4] to-[#053b6a]/[.8] px-3 rounded-t-xl rounded-r-xl"
            style={{ fontSize: '30px' }}
            onClick={() => nextProject()}
          >
            <i>
              <ArrowRight width={isMobile ? 20 : 50} height={isMobile ? 40 : 100} fill="white" />
            </i>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </section>
  )
}
