import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"

import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import SingleProduct from "./pages/SingleProduct"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Favorite from "./pages/Favorite"

//Dasboard
import DashboardLayout from "./Dashboard/DashboardLayout"
import DashboardHome from "./Dashboard/DashboardHome"


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
        { path: "cart", element: <Cart /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "/favorite", element: <Favorite /> },
        {
          path: "*",
          element: (
            <h1 className="min-h mt-50 flex justify-center text-center">
              404 - Page Not Found
            </h1>
          ),
        },
      ]
    },


    //Admin Dashboard
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children:[
        { index: true, element: <DashboardHome />},
        
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
