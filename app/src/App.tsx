import { useEffect } from "react";
import { IconContext } from "react-icons";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/pages/About";
import Analyses from "@/pages/Analyses";
import Home from "@/pages/Home";
import NewAnalysis from "@/pages/NewAnalysis";
import { scrollTo } from "@/util/dom";
import "modern-normalize/modern-normalize.css";
import "./styles.css";

function App() {
  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <RouterProvider router={router} />
    </IconContext.Provider>
  );
}

export default App;

/** route layout */
function Layout() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) scrollTo(hash);
  }, [hash]);

  return (
    <>
      <Header />
      <main>
        <QueryParamProvider
          adapter={ReactRouter6Adapter}
          options={{ updateType: "replaceIn" }}
        >
          <Outlet />
        </QueryParamProvider>
      </main>
      <Footer />
    </>
  );
}

/** route definitions */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "new-analysis",
        element: <NewAnalysis />,
      },
      {
        path: "analyses",
        element: <Analyses />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
