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
                        <Timeline>
                            <Timeline.Date>Janv 2021 - Fev 2021</Timeline.Date>
                            <Timeline.Body className="flex flex-col gap-2 pt-3 pb-5">
                                <Timeline.Title>Stagiaire</Timeline.Title>
                                <Paragraph>
                                    Nous développons en équipe une application en Node.js avec PDFTron, permettant de masquer des informations spécifiques dans des fichiers PDF, dans le cadre du Programme GDPR Phase 1.
                                </Paragraph>
                                <Timeline.Badge>
                                    SOLUMADA
                                </Timeline.Badge>
                            </Timeline.Body>
                        </Timeline>
                        <Timeline>
                            <Timeline.Date>Dépuis Janv 2022</Timeline.Date>
                            <Timeline.Body className="flex flex-col gap-2 py-4">
                                <Timeline.Title>Dévéloppeur d'application</Timeline.Title>
                                <Paragraph>
                                    Développeur chez Solumada depuis janvier 2022, spécialisé dans le développement et l'optimisation d'applications, la digitalisation des processus internes, et la collaboration sur des projets communs en front-end.
                                </Paragraph>
                                <Timeline.Badge>
                                    SOLUMADA
                                </Timeline.Badge>
                            </Timeline.Body>
                        </Timeline>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default ExperimentSection