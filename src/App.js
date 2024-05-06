import "./App.css";
import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import BookReads from "./pages/BookReads";
import Root from "./pages/Root";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       { index: true, path: "/portfolio", element: <Homepage /> },
//       { path: "/", element: <Homepage /> },
//       { path: "/read-books", element: <BookReads /> },
//     ],
//   },
// ]);

const App = () => {
  return <BrowserRouter basename="/portfolio">
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Homepage />} />
        <Route path="/read-books" element={<BookReads />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
