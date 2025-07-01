import Footer from './footer'
import { LayoutProps } from './types'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex-1 px-4">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
