import React from "react";
import Contact from '../components/Contact'
import Work from "../components/Work";
import Experience from "../components/Experience";
import About from "../components/About";
import Banner from "../components/Banner";
const Homepage = () => {
  return (
    <>
      <Banner />
      <About />
      <Experience />
      <Work />
      <Contact />
    </>
  );
}
export default Homepage;
