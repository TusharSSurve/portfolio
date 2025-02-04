export type ChildrenProps = {
  className?: string;
  children: React.ReactNode
}

type ProjectCardDetail = {
  id: number;
  year: string;
  wlinks: {
    id: number;
    link: string;
    icon: string;
  }[];
  title: string;
  para: string;
  langs: {
    id: number;
    lang: string;
  }[];
}

export type ProjectCardProps = {
  project: ProjectCardDetail
  className?: string
}

export type ExperienceProps = {
  id: number;
  job: string;
  job_link: string;
  job_title: string;
  range: string;
  role: string;
  tech: {
    id: number;
    skill: string;
  }[];
}

export type ExperienceCardProps = {
  experience: ExperienceProps;
  className?: string
}

type BlogCardDetail = {
  id: string;
  year: string;
  title: string;
  para: string;
}

export type BlogCardProps = {
  blog: BlogCardDetail
  className?: string
}