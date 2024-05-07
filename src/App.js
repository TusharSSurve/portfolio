import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import Root from "./pages/Root";

const App = () => {
  return <BrowserRouter basename="/portfolio">
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Homepage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
