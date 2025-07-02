'use client'

import Link from 'next/link'
import { CodeIcon } from '../../../../packages/icons'
import { LenguageOptions, TopbarOptions } from './constants'
import { renderFlagIcon } from '@/helpers/renderIcon'
import { LenguageEnum } from '@/constants/translate'
import { useState } from 'react'

const Topbar: React.FC = () => {
  const [lenguagesDisplayed, setLenguagesDisplayed] = useState<boolean>(false)

  const onDisplayLenguages = () => setLenguagesDisplayed(prevState => !prevState)

  return (
    <div className="flex justify-center items-center border-b border-primary-600 w-full h-16 sticky top-0 left-0 backdrop-blur-md z-50">
      <nav className="flex-1 flex items-center w-full max-w-6xl">
        <div className="flex items-center gap-3">
          <i>
            <CodeIcon width="32" height="32" fill="#4052b6" />
          </i>
          <Link href={'/#hero'}>
            <h3 className="text-2xl">DHFolio</h3>
          </Link>
        </div>
        <div className="flex w-full justify-evenly">
          {TopbarOptions.map((option, index) => (
            <div key={`topbar-option-${index}`}>
              <Link href={option.href}>
                <span className="text-lg text-white/60">{option.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <div>
        <div className="relative">
          <div
            className="border border-primary-600 p-2 rounded-lg w-24 cursor-pointer"
            onClick={() => onDisplayLenguages()}
          >
            <div className="flex items-center gap-4">
              <i>{renderFlagIcon(LenguageEnum['english'])}</i>
              <span className="text-white">EN</span>
            </div>
          </div>
          <div
            className="absolute top-14 right-0 border border-primary-600 rounded-lg w-24"
            style={{
              visibility: lenguagesDisplayed ? 'visible' : 'hidden',
            }}
          >
            <div className="flex flex-col justify-between p-1">
              {LenguageOptions.map((option, index) => (
                <div
                  key={`lenguage-option-${index}`}
                  className="flex items-center gap-4 cursor-pointer rounded-lg py-1 px-2 hover:bg-accent"
                >
                  <i>{renderFlagIcon(LenguageEnum[option.flag])}</i>
                  <span className="text-white">{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
