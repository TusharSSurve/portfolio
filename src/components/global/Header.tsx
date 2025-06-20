import { SOCIAL_LINKS } from "@/lib/constants"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Profile from '../../assets/profile.jpg';
import resume from '../../assets/resume.pdf'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";

export default function Header() {
  return (
    <header className="flex w-full animate-slide-from-down-and-fade-1 flex-col gap-6 px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Avatar className='relative flex shrink-0 overflow-hidden rounded-full size-14' >
            <AvatarImage src={Profile} height={56} width={56} alt="Tushar Surve Profile" />
            <AvatarFallback className="flex justify-center items-center mx-auto bg-greycolor rounded-full size-14 text-whitecolor">TS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-semibold text-warmblack dark:text-whitecolor text-lg">Tushar Surve</h1>
            <p className="mt-0.5 text-sm text-greycolor dark:text-darkwhitecolor">Senior FullStack Developer</p>
          </div>
        </div>
        <a href={resume} aria-label="Resume Download" className="rounded-md border size-8 border-darkwhitecolor/20 flex transition-all items-center justify-center hover:bg-darkgreycolor">
          <FontAwesomeIcon icon={faDownload} className='w-4 h-4 text-darkgreycolor/75 dark:text-darkwhitecolor' />
        </a>
      </div>
      <div className="mb-12">
        <ul className="flex gap-4">
          {
            SOCIAL_LINKS.map(slink => {
              return <li key={slink.id}>
                <a href={slink.link} aria-label={slink.name} className="w-10 h-10 size-8 border text-darkgreycolor/75 dark:border-darkwhitecolor/20 dark:text-darkwhitecolor flex justify-center items-center rounded-md transition-all hover:text-greycolor hover:bg-greycolor/25 dark:hover:bg-darkgreycolor ">
                  <FontAwesomeIcon icon={slink.icon} className='w-5 h-5' />
                </a>
              </li>
            })
          }
        </ul>
      </div>
    </header>
  )
}
