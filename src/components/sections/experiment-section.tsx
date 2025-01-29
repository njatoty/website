import { cn } from "../../utils"
import MaxWidthWrapper from "../ui/max-width-wrapper"
import Timeline from "../ui/timeline"
import { MutedTitle, Paragraph, StrongTitle } from "../ui/typography"

const ExperimentSection = ({ className }: { className?: string }) => {
    return (
        <div className={cn('w-full flex', className)} id="service">
            <MaxWidthWrapper className="mx-auto">
                <div className="w-full col-span-1 max-md:col-span-2">
                    <MutedTitle>Mes parcours</MutedTitle>
                    <StrongTitle>D'où vient mon savoir-faire ?</StrongTitle>
                    <Paragraph>
                        Chaque étape de mon parcours, entre formations et expériences, m'a permis d'acquérir des compétences solides et de relever divers défis. Voici un aperçu de mon évolution:
                    </Paragraph>
                </div>
                <div className="grid grid-cols-1 gap-10 my-5 lg:grid-cols-2">
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
                                    SOLUMADA
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
                                    SOLUMADA
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
            </MaxWidthWrapper>
        </div>
    )
}

export default ExperimentSection