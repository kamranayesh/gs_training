import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router;
