import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import Root from "./pages/Root";
import ReadBooks from "./pages/ReadBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/portfolio", element: <Homepage /> },
      { path: "/portfolio/read-books", element: <ReadBooks /> },
      { path: "/read-books", element: <ReadBooks /> },
      { path: "/", element: <Homepage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
