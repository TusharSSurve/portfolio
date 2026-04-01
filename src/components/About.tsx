import H2 from "./global/H2";
import P from "./global/P";

const technologies = [
  {
    id: 1,
    tech: "React.JS",
  },
  {
    id: 9,
    tech: "Java",
  },
  {
    id: 2,
    tech: "JavaScript/TypeScript",
  },
  {
    id: 3,
    tech: "Next.JS",
  },
  {
    id: 10,
    tech: "Spring Boot",
  },
  {
    id: 4,
    tech: "Tailwind CSS",
  },
  {
    id: 5,
    tech: "Python",
  },
  {
    id: 6,
    tech: "OpenCV",
  },
  {
    id: 7,
    tech: "SQL",
  },
  {
    id: 8,
    tech: "JPA/Hibernate",
  }
];
export default function About() {
  return (
    <section className="animate-slide-from-down-and-fade-2 space-y-2 px-4">
      <H2>About me</H2>
      <div className="">
        <P>Hey! I'm Tushar Surve, a Senior FullStack Developer at <a href="https://www.infosys.com/" className="anchor">Infosys</a>. My coding journey began in 2015, fueled by my passion for <mark>Mathematics.</mark> Discovering how programming simplifies complex problems captivated me, leading me to pursue a career in this field. Today, I excel in <mark>FullStack Development</mark> and am currently working on exciting Web based Fullstack Development projects.
        </P>
        <P className="my-3">When I'm not coding, you can find me lost in the pages of a good book, honing my strategic skills on the <a href="https://www.chess.com/member/skull2049" className="anchor">chessboard</a>, exploring new trekking trails, or checking off another item on my bucket list.</P>
        <P>Here are a few technologies I’ve been working with recently:</P>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 mt-5">
          {
            technologies.map(t => {
              return <li key={t.id} className="text-sm text-greycolor dark:text-darkwhitecolor relative mb-[10px] pl-5 before:content-['▹'] before:dark:text-neoncolor before:absolute before:left-0">{t.tech}</li>
            })
          }
        </ul>
      </div>
    </section>
  )
}
