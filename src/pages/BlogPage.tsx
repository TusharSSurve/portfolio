import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import BlogData from '../data/blogs.json';
import { useMeta } from "@/lib/hooks";
import BlogCard from "@/components/global/BlogCard";

export default function BlogPage() {
  const blogs = BlogData;
  useMeta({
    title: 'Tushar Surve | Blogs',
  })
  return (
    <>
      <Breadcrumb className="px-4 animate-slide-from-down-and-fade-1">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-darkwhitecolor hover:text-black dark:hover:text-whitecolor">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-darkwhitecolor" />
          <BreadcrumbItem>
            <BreadcrumbPage className="dark:text-whitecolor">Blogs</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="px-4 animate-slide-from-down-and-fade-2 scroll-m-20  text-4xl font-bold tracking-tight dark:text-whitecolor">All Blogs</h1>
      <div className="flex flex-col gap-3 px-4 animate-slide-from-down-and-fade-3 pt-12">
        {blogs.map(blog => {
          return <BlogCard blog={blog} key={blog.id} className="desktop:w-full desktop:max-w-full md:w-full py-4 px-4 rounded-lg" />
        })}
      </div>
    </>
  )
}
