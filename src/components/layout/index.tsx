import Footer from './footer'
import Topbar from './topbar'
import { LayoutProps } from './types'

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      <Topbar />
      <div className="flex-1 px-4 pt-16">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
