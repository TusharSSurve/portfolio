import { Link } from "react-router-dom"
import H2 from "./global/H2"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BlogCard from "./global/BlogCard";

const blogs = [
  {
    "id": "intro-to-ag-grid-react",
    "year": "2025",
    "title": "Introduction to Ag-Grid: React",
    "para": "Ag-Grid is a fast, powerful, and feature-rich JavaScript grid library. Whether you're building an application with a simple table or a complex enterprise solution, Ag-Grid offers comprehensive customization with...",
  }
]

export default function Blog() {
  return (
    <section className='animate-slide-from-down-and-fade-4 space-y-2 px-4'>
      <H2>Featured Blogs</H2>
      <div className='flex flex-wrap gap-[14px] pt-2'>
        {blogs.map(blog => {
          return <BlogCard blog={blog} key={blog.id} />
        })}
      </div>
      <div className='py-3'>
        <Link to="/blogs" className='flex justify-start items-center gap-[2px] whitespace-nowrap text-sm transition-colors text-black/70 dark:text-darkwhitecolor underline-offset-4 underline hover:text-darkgreycolor dark:hover:text-whitecolor w-fit'>
          All blogs
          <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 -rotate-45" />
        </Link>
      </div>
    </section>
  )
}
