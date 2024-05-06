import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import BookReads from "./pages/BookReads";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/portfolio", element: <Homepage /> },
      { path: "/", element: <Homepage /> },
      { path: "/read-books", element: <BookReads /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App;
