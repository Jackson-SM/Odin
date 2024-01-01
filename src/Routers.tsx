import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

function Routers() {
  return <RouterProvider router={router} />
}

export default Routers
