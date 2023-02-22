import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "./components/pages/MainPage/MainPage";
import AboutPage from "./components/pages/AboutPage/AboutPage";
import ContactPage from "./components/pages/ContactPage/ContactPage";
import WebworksPage from "./components/pages/WebworksPage/WebworksPage";
import Celebrity from "./components/pages/ProjectPage/Celebrity";
import GenderTerm from "./components/pages/ProjectPage/GenderTerm";
import Refugee from "./components/pages/ProjectPage/Refugee";
import Ximen from "./components/pages/ProjectPage/Ximen";

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
