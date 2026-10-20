import Experience from "../components/Experience";
import About from "../components/About";
import Project from "../components/Project";
import { useMeta } from "@/lib/hooks";
import { ROUTE_META } from "@/lib/constants";

export default function Home() {
  useMeta(ROUTE_META["/"]);
  return (
    <>
      <About />
      <Experience />
      <Project />
    </>
  )
}
