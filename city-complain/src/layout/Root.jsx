import { Outlet } from 'react-router'
import Navber from '../Components/Navber'

export default function Root() {
  return <div className="app-shell"><Navber /><Outlet /><footer className="site-footer"><div className="footer-inner"><a href="/" className="footer-brand">✳ ElakarComplain</a><span>Better neighborhoods start with all of us.</span><span>© {new Date().getFullYear()} ElakarComplain</span></div></footer></div>
}
