import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import ProjectData from '../data/work.json';
import ProjectCard from "@/components/global/ProjectCard";
import { useMeta } from "@/lib/hooks";
import { ROUTE_META } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Link, useSearchParams } from "react-router-dom";

const techs = [...new Set(ProjectData.flatMap(p => p.langs.map(l => l.lang)))].sort();

export default function Projects() {
  useMeta(ROUTE_META["/projects"]);
  const [searchParams, setSearchParams] = useSearchParams();
  const tech = searchParams.get('tech');
  const projects = ProjectData.filter(p => !tech || p.langs.some(l => l.lang === tech));

  const chip = (label: string, value: string | null) => (
    <li key={label}>
      <button
        onClick={() => setSearchParams(value ? { tech: value } : {}, { replace: true })}
        aria-pressed={tech === value}
        className={cn(
          "font-inconsolata text-xs border py-1 px-[7px] rounded-full transition-colors border-darkneoncolor dark:border-neoncolor",
          tech === value
            ? "bg-darkneoncolor text-whitecolor dark:bg-neoncolor dark:text-warmblack"
            : "text-darkneoncolor dark:text-neoncolor hover:bg-darkneoncolor/10 dark:hover:bg-neoncolor/10"
        )}
      >
        {label}
      </button>
    </li>
  );

  return (
    <>
      <Breadcrumb className="px-4 animate-slide-from-down-and-fade-1">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-darkwhitecolor hover:text-black dark:hover:text-whitecolor">
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-darkwhitecolor" />
          <BreadcrumbItem>
            <BreadcrumbPage className="dark:text-whitecolor">Projects</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="px-4 animate-slide-from-down-and-fade-2 scroll-m-20  text-4xl font-bold tracking-tight dark:text-whitecolor">All Projects</h1>
      <ul className="flex flex-wrap gap-[7px] px-4 pt-8 animate-slide-from-down-and-fade-3" aria-label="Filter by technology">
        {chip("All", null)}
        {techs.map(t => chip(t, t))}
      </ul>
      <div className="flex flex-col gap-3 px-4 animate-slide-from-down-and-fade-3 pt-4">
        {projects.map(project => {
          return <ProjectCard project={project} key={project.id} className="desktop:w-full desktop:max-w-full md:w-full py-4 px-4 rounded-lg" />
        })}
      </div>
    </>
  )
}
