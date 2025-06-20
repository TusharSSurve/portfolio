import { BlogCardProps } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

export default function BlogCard({ blog, className }: BlogCardProps) {
  return (
    <div className={cn("rounded-[4px] bg-black py-8 px-7 flex flex-col justify-between w-full border border-greycolor", className)} >
      <div>
        <Link to={`/blogs/${blog.id}`}>
          <h3 className="mt-1 mb-2 dark:text-whitecolor underline">{blog.title}</h3>
        </Link>
        <p className="dark:text-darkwhitecolor">{blog.para}</p>
      </div>
    </div>
  )
}
