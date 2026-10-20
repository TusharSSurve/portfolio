import { useMeta } from "@/lib/hooks"
import { Link } from "react-router-dom"

export default function Error() {
  useMeta({
    title: "404: This page could not be found.",
    description: "This page could not be found."
  })
  return (
    <main className="w-full flex flex-col items-center justify-center h-[calc(100dvh-2.5rem-1rem)] md:h-[calc(100vh-2.5rem-1rem)] ">
      <h1 className="text-4xl dark:text-whitecolor mb-3">Page not found.</h1>
      <p className="dark:text-whitecolor max-w-72 text-center mb-8">You seem to have reached a page that doesn't exist or may never exist.</p>
      <Link className="bg-warmblack text-whitecolor dark:bg-whitecolor dark:text-warmblack font-semibold py-1 px-2 rounded-2xl" to="/">Go Home</Link>
    </main>
  )
}
