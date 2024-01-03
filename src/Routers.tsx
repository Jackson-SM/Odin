import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])

function Routers() {
  return <RouterProvider router={router} />
}

export default Routers
