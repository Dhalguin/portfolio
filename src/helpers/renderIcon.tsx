import { TechnologiesEnum } from '@/constants/skills'
import { CodeIcon, TechnologyIcon } from '../../packages/icons'

export const renderIcon = (value: TechnologiesEnum) => {
  switch (value) {
    case 'reactjs':
      return <TechnologyIcon.ReactjsIcon width="24" height="24" fill="white" />

    case 'nextjs':
      return <TechnologyIcon.NextjsIcon width="24" height="24" fill="white" />

    case 'react-native':
      return <TechnologyIcon.ReactjsIcon width="24" height="24" fill="white" />

    case 'typescript':
      return <TechnologyIcon.TypescriptIcon width="24" height="24" fill="white" />

    case 'nodejs':
      return <TechnologyIcon.NodejsIcon width="24" height="24" fill="white" />

    case 'expressjs':
      return <TechnologyIcon.ExpressjsIcon width="24" height="24" fill="white" />

    case 'nestjs':
      return <TechnologyIcon.NestjsIcon width="24" height="24" fill="white" />

    case 'mongodb':
      return <TechnologyIcon.MongoDbIcon width="24" height="24" fill="white" />

    case 'mysql':
      return <TechnologyIcon.MySqlIconIcon width="24" height="24" fill="white" />

    case 'postgresql':
      return <TechnologyIcon.PostgreSqlIcon width="24" height="24" fill="white" />

    case 'aws':
      return <TechnologyIcon.AwsIcon width="24" height="24" fill="white" />

    default:
      return <CodeIcon width="24" height="24" fill="white" />
  }
}
