import { createBrowserRouter } from 'react-router'
import Root from '../layout/Root'
import Home, { Dashboard, Explore, Report } from '../page/Home'
import Login from '../page/Login'
import Register from '../page/Register'

const router = createBrowserRouter([{ path: '/', element: <Root />, children: [
  { index: true, element: <Home /> }, { path: 'explore', element: <Explore /> }, { path: 'report', element: <Report /> },
  { path: 'dashboard', element: <Dashboard /> }, { path: 'admin', element: <Dashboard admin /> },
  { path: 'login', element: <Login /> }, { path: 'registration', element: <Register /> },
]}])
export default router
