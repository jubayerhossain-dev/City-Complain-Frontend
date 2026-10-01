import { Link, useLocation, useNavigate } from 'react-router'

export default function Navber() {
  const navigate = useNavigate()
  useLocation() // Re-read auth from localStorage after login navigation.
  const token = localStorage.getItem('lm_token')
  let user = null
  try { user = JSON.parse(localStorage.getItem('civic_user') || 'null') } catch {}
  const logout = () => { localStorage.removeItem('lm_token'); localStorage.removeItem('civic_user'); window.location.href = '/' }
  return <header className="site-header"><nav className="nav-inner"><Link to="/" className="brand"><span className="brand-mark">✳</span><span><b>Elakar<span>Complain</span></b><small>COMMUNITY SERVICES</small></span></Link><div className="nav-links"><Link to="/explore">Explore</Link><a href="/#how-it-works">How it works</a></div><div className="nav-actions">{token ? <><Link className="nav-dashboard" to={user?.role?.toLowerCase() === 'admin' ? '/admin' : '/dashboard'}>{user?.role?.toLowerCase() === 'admin' ? 'Admin panel' : 'My reports'}</Link><button className="text-button" onClick={logout}>Log out</button></> : <><Link className="text-button" to="/login">Log in</Link><Link className="button button-primary nav-cta" to="/registration">Create account <span>↗</span></Link></>}</div><button className="mobile-report" onClick={() => navigate('/report')}>＋</button></nav></header>
}
