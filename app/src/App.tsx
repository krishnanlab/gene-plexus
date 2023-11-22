import "@/global/styles.css";
import "@/global/util.css";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { QueryParamProvider } from "use-query-params";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Toast from "@/components/Toast";
import About from "@/pages/About";
import Analyses from "@/pages/Analyses";
import Home from "@/pages/Home";
import NewAnalysis from "@/pages/NewAnalysis";
import Testbed from "@/pages/Testbed";
import { scrollTo, waitFor } from "@/util/dom";
import { sleep } from "@/util/misc";

/** app entrypoint */
const App = () => <RouterProvider router={router} />;

export default App;

/** route layout */
const Layout = () => {
  const { hash } = useLocation();

  /** scroll to hash in url */
  useEffect(() => {
    if (!hash) return;
    scrollTo(hash);
  }, [hash]);

  return (
    <IconContext.Provider value={{ className: "icon" }}>
      <QueryParamProvider
        adapter={ReactRouter6Adapter}
        options={{ updateType: "replaceIn" }}
      >
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Toast />
      </QueryParamProvider>
    </IconContext.Provider>
  );
};

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
      {
        path: "testbed",
        element: <Testbed />,
      },
      {
        /** not found */
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
