import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"

import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Product /> },
        { path: "about", element: <About /> },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
