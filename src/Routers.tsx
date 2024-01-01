import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

function Routers() {
  return <RouterProvider router={router} />
}

export default Routers