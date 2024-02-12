/* eslint-disable @next/next/no-img-element */

export default function Icons({ id }: { id: string }) {
  switch (id) {
    case 'HTML':
      return <img src="/icons/html.png" alt="html" />

    case 'CSS':
      return <img src="/icons/css.png" alt="css" />
    case 'JS':
      return <img src="/icons/js.png" alt="javascript" />
    case 'REACT':
      return <img src="/icons/react.png" alt="reactjs" />
    case 'REACT NATIVE':
      return <img src="/icons/react.png" alt="reactnative" />
    case 'NEXT':
      return <img src="/icons/next.png" alt="nextjs" />
    case 'VUE':
      return <img src="/icons/vue.png" alt="vuejs" />
    case 'NODE':
      return <img src="/icons/node.png" alt="node" />
    case 'POSTGRESQL':
      return <img src="/icons/postgress.png" alt="postgresql" />
    case 'MYSQL':
      return <img src="/icons/mysql.png" alt="mysql" />
    case 'MONGO':
      return <img src="/icons/mongo.png" alt="mongodb" />

    default:
      return <></>
  }
}
