import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"

import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import SingleProduct from "./pages/SingleProduct"
import Contact from "./pages/Contact"

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Product /> },
        { path: "products/:id", element: <SingleProduct /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
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
