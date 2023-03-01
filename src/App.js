import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./components/pages/MainPage/MainPage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import WebworksPage from "./components/pages/WebworksPage/WebworksPage";
import Celebrity from "./components/pages/ProjectPage/Celebrity";
import GenderTerm from "./components/pages/ProjectPage/GenderTerm";
import Refugee from "./components/pages/ProjectPage/Refugee";
import Ximen from "./components/pages/ProjectPage/Ximen";
import California from "./components/pages/ProjectPage/California";
import CoLiving from "./components/pages/ProjectPage/CoLiving"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    // {
    //   path: "/webworks",
    //   element: <WebworksPage />,
    // },
    {
      path:"/california",
      element: <California/>
    },
    {
      path: "/gender",
      element: <GenderTerm />,
    },
    {
      path: "/ximen",
      element: <Ximen />,
    },
    {
      path: "/refugee",
      element: <Refugee />,
    },
    {
      path: "/celebrity",
      element: <Celebrity />,
    },
    {
      path: "/coliving",
      element: <CoLiving />,
    },
  ]);
  return (
    <>
      <div className="m-auto w-[85%] text-black">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
