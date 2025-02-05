import { cn } from "../../utils"
import { LinkButton } from "../ui/buttons"
import MaxWidthWrapper from "../ui/max-width-wrapper"
import Timeline from "../ui/timeline"
import { MutedTitle, Paragraph, StrongTitle } from "../ui/typography"
import { BsArrowRight } from "react-icons/bs"

const ExperimentSection = ({ className }: { className?: string }) => {
    return (
        <section id="experiment" className={cn('w-full flex', className)}>
            <MaxWidthWrapper className="mx-auto">
                <div className="w-full col-span-1 max-md:col-span-2">
                    <MutedTitle>Mes parcours</MutedTitle>
                    <StrongTitle>D'où vient mon savoir-faire ?</StrongTitle>
                    <Paragraph>
                        Chaque étape de mon parcours, entre formations et expériences, m'a permis d'acquérir des compétences solides et de relever divers défis. Voici un aperçu de mon évolution:
                    </Paragraph>
                </div>
                <div className="grid grid-cols-1 gap-5 my-5 md:gap-10 md:grid-cols-2">
                    <div className="w-full">

                        <MutedTitle className='mb-4 text-sm font-bold'>Experiences professionnelles</MutedTitle>

                        <Timeline>
                            <Timeline.Date>Janvier 2021 - Février 2021</Timeline.Date>
                            <Timeline.Body className="flex flex-col gap-2 pt-3 pb-5">
                                <Timeline.Title>Stagiaire</Timeline.Title>
                                <Timeline.Badges>
                                    <Timeline.Badge className="text-xs border-none bg-c-dark0 text-c-light">HTML/CSS</Timeline.Badge>
                                    <Timeline.Badge className="text-xs border-none bg-c-dark0 text-c-light">Javascript</Timeline.Badge>
                                    <Timeline.Badge className="text-xs border-none bg-c-dark0 text-c-light">Node.js</Timeline.Badge>
                                </Timeline.Badges>
                                <Timeline.Tag>
                                    <a href="https://www.solumada.mg" target="__blank">SOLUMADA</a>
                                </Timeline.Tag>
                                <Paragraph>
                                    Nous développons en équipe une application en Node.js avec PDFTron, permettant de masquer des informations spécifiques dans des fichiers PDF, dans le cadre du Programme GDPR Phase 1.
                                </Paragraph>
                            </Timeline.Body>
                        </Timeline>
                        <Timeline>
                            <Timeline.Date>Dépuis Janvier 2022 - Présent</Timeline.Date>
                            <Timeline.Body className="flex flex-col gap-2 py-4">
                                <Timeline.Title>Dévéloppeur d'application</Timeline.Title>
                                <Timeline.Badges>
                                    <Timeline.Badge className="text-xs border-none bg-c-dark0 text-c-light">HTML/CSS</Timeline.Badge>
                                    <Timeline.Badge className="text-xs border-none bg-c-dark0 text-c-light">React</Timeline.Badge>
                                    <Timeline.Badge className="text-xs border-none bg-c-dark0 text-c-light">Javascript</Timeline.Badge>
                                    <Timeline.Badge className="text-xs border-none bg-c-dark0 text-c-light">Node.js</Timeline.Badge>
                                    <Timeline.Badge className="text-xs border-none bg-c-dark0 text-c-light">MongoDB</Timeline.Badge>
                                </Timeline.Badges>
                                <Timeline.Tag>
                                    <a href="https://www.solumada.mg" target="__blank">SOLUMADA</a>
                                </Timeline.Tag>
                                <Paragraph>
                                    Développeur chez Solumada depuis janvier 2022, spécialisé dans le développement et l'optimisation d'applications, la digitalisation des processus internes, et la collaboration sur des projets communs en front-end.
                                </Paragraph>
                            </Timeline.Body>
                        </Timeline>
                    </div>

                    <div className="w-full">

                        <MutedTitle className='mb-4 text-sm font-bold'>Education et formation</MutedTitle>

                        <Timeline>
                            <Timeline.Date>Janvier 2019 - Novembre 2021</Timeline.Date>
                            <Timeline.Body className="flex flex-col gap-2 pt-3 pb-5">
                                <Timeline.Title>Etudiant en Informatique</Timeline.Title>

                                <Timeline.Badges>
                                    <Timeline.Badge className="text-xs border-none bg-c-dark0 text-c-light">
                                        Licence - Application et Génie Logiciel
                                    </Timeline.Badge>
                                </Timeline.Badges>
                                <Timeline.Tag>
                                    Université Adventiste Zurcher
                                </Timeline.Tag>
                                <Paragraph>
                                    J'ai suivi un parcours en Informatique, spécialisation Application et Génie Logiciel, aboutissant à l'obtention de mon diplôme de licence.
                                </Paragraph>
                            </Timeline.Body>
                        </Timeline>
                    </div>
                </div>
                <div className="w-full my-6">
                    <MutedTitle className='mb-4 text-sm font-bold'>Découvrez mon CV</MutedTitle>
                    <Paragraph>Consultez mon CV pour plus de détails sur mon parcours et mes compétences.</Paragraph>

                    <LinkButton
                        href="/cv-njato.pdf" // Remplace par l'URL de ton CV
                        variant="fill"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 my-4"
                    >
                        <span>Voir mon CV</span>
                        <BsArrowRight size={20} />
                    </LinkButton>
                </div>
                <div className="w-full my-6">
                    <MutedTitle className='mb-4 text-sm font-bold'>Mon Blog</MutedTitle>
                    <Paragraph>Partage de mes expériences, conseils et découvertes en développement web.</Paragraph>

                    <LinkButton
                        href="/blog" // Remplace par l'URL de ton CV
                        color="secondary"
                        variant="outline"
                        rel="noopener noreferrer"
                        className="px-4 py-2 mt-4"
                    >
                        <span>Voir mon Blog</span>
                        <BsArrowRight size={20} />
                    </LinkButton>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default ExperimentSection