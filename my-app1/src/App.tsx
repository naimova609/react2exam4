import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout/Layout"
import Homepage from "./pages/Homepage"
import Aboutpage from "./pages/Aboutpage"
import Vehiclespage from "./pages/Vehiclespage"
import Contactpage from "./pages/Contactpage"
import Infopage from "./pages/Infopage"
import Loginpage from "./pages/Loginpage"


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Loginpage/>
        },
        {
          path: "/",
          element: <Homepage/>
        },
        {
          path: "/about",
          element: <Aboutpage/>
        },
        {
          path: "/vehicles",
          element: <Vehiclespage/>
        },
        {
          path: "/cpntact",
          element: <Contactpage/>
        },
        {
          path: "/info",
          element: <Infopage/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

export default App
