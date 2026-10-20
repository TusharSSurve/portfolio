import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export const SITE_URL = "https://tusharsurve.vercel.app";

export const ROUTE_META = {
  "/": {
    title: "Tushar Surve | Senior Software Engineer",
    description: "Tushar Surve, Senior Software Engineer: full-stack projects with React, Next.js, Python/FastAPI and Java/Spring Boot."
  },
  "/projects": {
    title: "Tushar Surve | Projects",
    description: "All projects by Tushar Surve: web apps, Chrome extensions, computer vision and data analysis."
  }
};

export const SOCIAL_LINKS = [
  {
    id: 1,
    link: "https://github.com/TusharSSurve",
    name: "Github",
    icon: faGithub
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/surve-tushar/",
    name: "LinkedIn",
    icon: faLinkedin
  },
  {
    id: 3,
    link: "mailto:ttusharsurve567@gmail.com",
    name: "Mail",
    icon: faPaperPlane
  }
];