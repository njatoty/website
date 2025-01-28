import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { cn } from '../../utils'
import { LinkButton } from '../ui/buttons';
import { NpmIcon } from '../ui/icons/dev';
import MaxWidthWrapper from '../ui/max-width-wrapper';
import Swiper from '../ui/swiper';
import { MutedTitle, Paragraph, StrongTitle } from '../ui/typography'
import WorkCard from '../ui/work-card'

const dynamic_projects = [
    {
        image: "./projects/dynamic/fastinfo.png",
        title: "Application Web avec Next.js",
        description: "Une application web pour gérer des stocks et suivre des revenus.",
        techs: ["Next.js", "Prisma", "SQLite", "Redux"],
    },
    {
        image: "./projects/dynamic/serasera.png",
        title: "Plateforme de ventes en ligne",
        description: "Plateforme e-commerce avec panier et paiement sécurisé via Stripe.",
        techs: ["Next.js", "Prisma", "Redux", "PostgreSQL", "Stripe"],
    },
    {
        image: "./projects/dynamic/cotram.png",
        title: "Application desktop avec Electron",
        description: "Une application pour gérer les colis et générer des reçus facilement.",
        techs: ["Electron", "React", "Prisma", "SQLite"],
    },
    {
        image: "./projects/dynamic/diagno.png",
        title: "Application desktop avec Electron",
        description: "Enregistrement des patients et suivi de leurs diagnostics médicaux.",
        techs: ["Electron", "React", "Prisma", "Material-UI", "SQLite"],
    },
    {
        image: "./projects/dynamic/scheduler.jpeg",
        title: "Application web avec Node.js",
        description: "Gestionnaire des événements et planificateur des plannings intuitif.",
        techs: ["HTML", "CSS", "Nodejs", "MongoDB", "Toast-UI"],
    },
];

const static_projects = [
    {
        image: "./projects/static/portfolio-1.png",
        title: "Design de portfolio web",
        description: "Un design élégant avec un formulaire de contact.",
        techs: ["Next.js", "Tailwindcss"],
        link: "https://njatoty.vercel.app"
    },
    {
        image: "./projects/static/portfolio-2.png",
        title: "Design de portfolio web",
        description: "Un design élégant simple avec un formulaire de contact",
        techs: ["HTML", "CSS", "Javascript"],
        link: "https://njatoty.github.io/portfolio"
    },
    {
        image: "./projects/static/portfolio-3.png",
        title: "Design de portfolio web",
        description: "Un design simple.",
        techs: ["HTML", "CSS", "Javascript"],
        link: "https://njatoty.github.io/portfolio-2033"
    },
    {
        image: "./projects/static/quiz.jpeg",
        title: "Application Web QUIZ",
        description: "Une application pour gérer les colis et générer des reçus facilement.",
        techs: ["React", "CSS"],
        link: "https://quiz-game-blush.vercel.app"
    },
];


const ProjectSection = ({ className, }: { className?: string }) => {
    return (
        <div className={cn('w-full flex-grow', className)}>
            <MaxWidthWrapper className='mx-auto'>
                <div className="w-full">
                    <MutedTitle>Mes projets</MutedTitle>
                    <StrongTitle>Qu'ai-je réalisé ?</StrongTitle>
                    <Paragraph>
                        Voici une sélection de projets récents mettant en valeur mes compétences en développement, allant de sites web interactifs à des applications backend robustes et des projets desktop.
                    </Paragraph>
                </div>
                <div className="flex flex-col w-full my-5">
                    <MutedTitle className='text-sm font-bold'># Projets Dynamiques</MutedTitle>
                    <Swiper className="w-full">
                        {[...dynamic_projects].map((project, index) => (
                            <WorkCard className='min-w-[350px] w-[350px]' key={index}>
                                <WorkCard.Image
                                    src={project.image}
                                    className='relative z-10 w-full'
                                />
                                <WorkCard.Body>
                                    <WorkCard.Title>{project.title}</WorkCard.Title>
                                    <Paragraph className='text-sm'>
                                        {project.description}
                                    </Paragraph>
                                    <WorkCard.TeckList>
                                        {project.techs.map((tech, i) => (
                                            <WorkCard.Tech key={i}>{tech}</WorkCard.Tech>
                                        ))}
                                    </WorkCard.TeckList>
                                </WorkCard.Body>
                            </WorkCard>
                        ))}
                    </Swiper>
                </div>

                <div className="flex flex-col w-full my-5">
                    <MutedTitle className='text-sm font-bold'># Projets Statiques</MutedTitle>
                    <Swiper className="w-full">
                        {[...static_projects].map((project, index) => (
                            <WorkCard className='min-w-[350px] w-[350px]' key={index}>
                                <WorkCard.Image
                                    src={project.image}
                                    className='relative z-10 w-full'
                                />
                                <WorkCard.Body>
                                    <WorkCard.Title>{project.title}</WorkCard.Title>
                                    <Paragraph className='text-sm'>
                                        {project.description}
                                    </Paragraph>
                                    <WorkCard.TeckList>
                                        {project.techs.map((tech, i) => (
                                            <WorkCard.Tech key={i}>{tech}</WorkCard.Tech>
                                        ))}
                                    </WorkCard.TeckList>
                                </WorkCard.Body>
                            </WorkCard>
                        ))}
                    </Swiper>
                </div>
                <div className="flex flex-col w-full">
                    <MutedTitle className='text-sm font-bold'># NPM Library</MutedTitle>
                    <WorkCard className='w-fit'>
                        <WorkCard.Body>
                            <div className="flex items-stretch gap-4 p-2">
                                <div className="flex p-0 place-items-center">
                                    <NpmIcon size={50} />
                                </div>
                                <div className='w-full'>
                                    <Paragraph className='mb-1'>
                                        <span className='font-bold text-c-light'>react-canvas-snap</span>
                                    </Paragraph>
                                    <Paragraph className='w-full max-w-lg text-sm line-clamp-3'>
                                        Une bibliothèque React permettant de capturer une zone spécifique d'un canvas avec le curseur de la souris.
                                        Dessinez un cadre de sélection pour capturer le contenu souhaité.
                                    </Paragraph>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <LinkButton
                                    href='https://www.npmjs.com/package/react-canvas-snap?activeTab=readme'
                                    target='_blank'
                                    className='flex items-center gap-2 text-xs hover:text-orange-500'
                                >
                                    Voir sur npm
                                    <FaExternalLinkAlt className='text-c-gray' size={10} />
                                </LinkButton>

                                <LinkButton
                                    href='https://github.com/njatoty/react-canvas-snap'
                                    target='_blank'
                                    className='flex items-center gap-2 text-xs hover:text-orange-500'
                                >
                                    Voir sur GitHub
                                    <FaExternalLinkAlt className='text-c-gray' size={10} />
                                </LinkButton>

                                <LinkButton href='/blog' className='flex items-center gap-2 text-xs'>
                                    En savoir plus sur mon blog
                                    <FaArrowRight className='text-c-gray' size={10} />
                                </LinkButton>
                            </div>
                        </WorkCard.Body>
                    </WorkCard>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default ProjectSection