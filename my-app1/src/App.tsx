import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Infopage from "./pages/Infopage";
import Loginpage from "./pages/Loginpage";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Loginpage />,
        },
        {
          path: "/",
          element: (
            <Provider store={store}>
              <Homepage />
            </Provider>
          ),
        },
        {
          path: "/about",
          element: <Aboutpage />,
        },
        {
          path: "/cpntact",
          element: <Contactpage />,
        },
        {
          path: "/info/?id",
          element: <Infopage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
