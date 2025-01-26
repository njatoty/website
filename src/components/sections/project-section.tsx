import { cn } from '../../utils'
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
                    <Swiper className="py-3">
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
                    <Swiper className="py-3">
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
            </MaxWidthWrapper>
        </div>
    )
}

export default ProjectSection