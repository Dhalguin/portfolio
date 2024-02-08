/* eslint-disable @next/next/no-img-element */

export default function Icons({ id }: { id: string }) {
  switch (id) {
    case 'HTML':
      return <img src="/icons/html.png" alt="html" />

    case 'CSS':
      return <img src="/icons/css.png" alt="html" />
    case 'JS':
      return <img src="/icons/js.png" alt="html" />
    case 'REACT':
      return <img src="/icons/react.png" alt="html" />
    case 'NEXT':
      return <img src="/icons/next.png" alt="html" />
    case 'NODE':
      return <img src="/icons/node.png" alt="html" />
    case 'POSTGRESQL':
      return <img src="/icons/postgress.png" alt="html" />
    case 'MYSQL':
      return <img src="/icons/mysql.png" alt="html" />
    case 'MONGO':
      return <img src="/icons/mongo.png" alt="html" />

    default:
      return <></>
  }
}
