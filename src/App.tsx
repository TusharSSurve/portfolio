import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/global/ScrollToTop";
import Error from "./pages/Error";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/BlogPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="/blogs/:slug" element={<Blogs />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}
