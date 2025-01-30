import { FaArrowRight } from 'react-icons/fa';
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

const npm_projects = [
    {
        name: "react-canvas-snap",
        description: `Une bibliothèque React permettant de capturer une zone spécifique d'un canvas avec le curseur de la souris. Dessinez un cadre de sélection pour capturer le contenu souhaité.`,
        githubLink: "https://github.com/njatoty/react-canvas-snap",
        npmLink: "https://www.npmjs.com/package/react-canvas-snap?activeTab=readme",
        blogLink: "/blog/react-canva-snap",
        badgesLinks: [
            "https://img.shields.io/npm/dw/react-canvas-snap?color=green&style=flat-square",
            "https://img.shields.io/bundlephobia/minzip/react-canvas-snap?style=flat-square"
        ]
    }
]


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
                    <MutedTitle className='text-sm font-bold'>Projets Dynamiques</MutedTitle>
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
                    <MutedTitle className='text-sm font-bold'>Projets Statiques</MutedTitle>
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
                    <MutedTitle className='text-sm font-bold'>NPM Library</MutedTitle>
                    <div className="flex flex-nowrap">
                        {
                            npm_projects.map((project, index) => (
                                <WorkCard key={index} className='w-fit'>
                                    <WorkCard.Body>
                                        <div className="flex items-stretch gap-4 p-2">
                                            <div className="flex px-4 place-items-center">
                                                <NpmIcon size={50} />
                                            </div>
                                            <div className='flex flex-col w-full gap-2'>
                                                <Paragraph className=''>
                                                    <span className='font-bold text-c-dark0 dark:text-c-light'>{project.name}</span>
                                                </Paragraph>
                                                <Paragraph className='w-full max-w-lg text-sm line-clamp-3'>
                                                    {project.description}
                                                </Paragraph>
                                                <div className="flex items-center gap-2 mb-4">
                                                    {
                                                        project.badgesLinks.map((link, index) => (
                                                            <a key={index} href={project.npmLink} target="_blank">
                                                                <img src={link} alt="npm badge" />
                                                            </a>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </WorkCard.Body>
                                </WorkCard>
                            ))
                        }
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default ProjectSection