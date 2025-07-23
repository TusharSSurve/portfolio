import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import Particles from "./components/magicui/particles";
import { useDarkmode } from "./lib/hooks";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function Layout() {
  const isDark = useDarkmode();
  const location = useLocation().pathname


  return (
    <>
      {location === '/' && <Header />}
      <main className={`flex flex-col ${location === '/' ? 'gap-12' : ''} ${location === '/projects' ? 'gap-4' : ''}`}>
        <Outlet />
        <Analytics />
        <SpeedInsights />
      </main>
      {(location === '/' || location === '/projects') && <Footer />}

      <Particles
        className="fixed inset-0 h-screen overflow-hidden -z-10 opacity-70"
        quantity={45}
        staticity={250}
        ease={50}
        color={`${isDark ? "#66fcf1" : ""}`}
        refresh
      />
    </>
  )
}
