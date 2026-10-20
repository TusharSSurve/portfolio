import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import H2 from './H2';
import P from './P';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="mt-12 px-4 pb-20">
      <H2>Get in touch</H2>
      <P>Whether you have a question or just want to chat, feel free to shoot me an email. I'll do my best to get back to you!</P>
      <ul className="flex justify-center gap-4 mt-6">
        {
          SOCIAL_LINKS.map(slink => {
            return <li key={slink.id}>
              <a href={slink.link} aria-label={slink.name} className="w-10 h-10 text-darkgreycolor/75 dark:text-darkwhitecolor flex justify-center items-center rounded-full transition-all hover:text-greycolor hover:bg-greycolor/25 dark:hover:bg-darkgreycolor ">
                <FontAwesomeIcon icon={slink.icon} className='w-6 h-6' />
              </a>
            </li>
          })
        }
      </ul>
    </footer>
  )
}
