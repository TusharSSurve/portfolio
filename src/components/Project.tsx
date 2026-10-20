import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import H2 from './global/H2';
import ProjectCard from './global/ProjectCard';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ProjectData from '../data/work.json';

const projects = ProjectData.filter(p => p.featured);

export default function Project() {
  return (
    <section className='animate-slide-from-down-and-fade-4 space-y-2 px-4'>
      <H2>Featured Projects</H2>
      <div className='flex flex-wrap gap-[14px] justify-center pt-2'>
        {projects.map(project => {
          return <ProjectCard project={project} key={project.id} />
        })}
      </div>
      <div className='py-3'>
        <Link to="/projects" className='flex justify-start items-center gap-[2px] whitespace-nowrap text-sm transition-colors text-black/70 dark:text-darkwhitecolor underline-offset-4 underline hover:text-darkgreycolor dark:hover:text-whitecolor w-fit'>
          All projects
          <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 -rotate-45" />
        </Link>
      </div>
    </section>
  )
}
