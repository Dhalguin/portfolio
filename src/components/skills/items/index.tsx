'use client'

import Icons from '@/packages/IconSkill'
import { LinearProgress, withStyles } from '@material-ui/core'

const LinearProgressStyled = withStyles(theme => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[700],
  },
  bar: {
    backgroundColor: '#0A63AD',
  },
}))(LinearProgress)

interface ItemSkillIProps {
  name: string
  percentage: number
  id: string
}

export default function ItemSkill({ name, percentage, id }: ItemSkillIProps) {
  return (
    <div className="flex flex-col gap-2 w-full lg:basis-[30%] mb-10 lg:mr-8">
      <div className="flex gap-4 items-center">
        <span className="text-lg lg:text-3xl">{name}</span>
        <i className="h-6 lg:h-8 max-w-8 lg:max-w-10 flex items-center">
          <Icons id={id} />
        </i>
      </div>
      <LinearProgressStyled variant="determinate" value={percentage} />
    </div>
  )
}
