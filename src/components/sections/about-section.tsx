import { cn } from "../../utils"
import { MdOutlineWorkspacePremium } from "react-icons/md"
import { PiGraduationCapFill } from "react-icons/pi"
import { TbJewishStar } from "react-icons/tb"
import { BiWorld } from "react-icons/bi"
import { ListDisc, MutedTitle, Paragraph, StrongTitle } from "../ui/typography"
import AboutCard from "../ui/about-card"
import MaxWidthWrapper from "../ui/max-width-wrapper"

const AboutSection = ({ className }: { className?: string }) => {
    return (
        <div className={cn("w-full flex", className)} id='about'>
            <MaxWidthWrapper className="px-2 mx-auto">
                <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
                    <div className="w-full col-span-1 max-md:col-span-2">
                        <MutedTitle>A propos de moi</MutedTitle>
                        <StrongTitle>Qui suis-je?</StrongTitle>
                        <Paragraph>
                            Développeur web passionné, spécialisé en solutions web innovantes. Avec une expertise en frontend et backend, je crée des expériences utilisateur fluides et performantes.
                        </Paragraph>
                    </div>
                    <div className="grid w-full grid-cols-2 col-span-2 gap-10 max-sm:grid-cols-1">
                        {/* Parcours */}
                        <AboutCard>
                            <AboutCard.Icon>
                                <MdOutlineWorkspacePremium size={24} />
                            </AboutCard.Icon>
                            <AboutCard.Title>
                                <span>Expérience professionnelle</span>
                            </AboutCard.Title>
                            <AboutCard.Body>
                                <Paragraph>
                                    Développeur Fullstack chez <a href="https://www.solumada.mg" target="__blank" className="font-bold">Solumada</a> depuis janvier 2022. Actuellement en poste, je contribue aux projets de l'entreprise avec expertise et professionnalisme.
                                </Paragraph>
                            </AboutCard.Body>
                        </AboutCard>

                        {/* Parcours et Education */}
                        <AboutCard>
                            <AboutCard.Icon>
                                <PiGraduationCapFill size={24} />
                            </AboutCard.Icon>
                            <AboutCard.Title>
                                <span>Parcours et Education</span>
                            </AboutCard.Title>
                            <AboutCard.Body>
                                <Paragraph>
                                    Titulaire d'une licence en Informatique, spécialisation Applications et Génie Logiciel, obtenue à <a href="https://zurcher.edu.mg" target="__blank" className="font-bold">Université Adventist Zurcher</a> le 14 novembre 2021.
                                </Paragraph>
                            </AboutCard.Body>
                        </AboutCard>

                        {/* Intérêts professionnels */}
                        <AboutCard>
                            <AboutCard.Icon>
                                <TbJewishStar size={24} />
                            </AboutCard.Icon>
                            <AboutCard.Title>
                                <span>Intérêts professionnels</span>
                            </AboutCard.Title>
                            <AboutCard.Body>
                                <Paragraph>
                                    Passionné par le développement web, j'ai un fort intérêt pour les frameworks comme React et Next.js, qui me permettent de créer des applications performantes et scalables. J'explore également l'intégration de TypeScript et l'optimisation des performances pour améliorer l'expérience utilisateur.
                                </Paragraph>
                            </AboutCard.Body>
                        </AboutCard>

                        {/* Langues */}
                        <AboutCard>
                            <AboutCard.Icon>
                                <BiWorld size={24} />
                            </AboutCard.Icon>
                            <AboutCard.Title>
                                <span>Langues maitrisés</span>
                            </AboutCard.Title>
                            <AboutCard.Body>
                                <Paragraph>
                                    Je parle plusieurs langues, ce qui me permet de travailler dans des environnements internationaux et de collaborer avec des équipes diversifiées.
                                </Paragraph>
                                <ListDisc className="list-disc list-inside">
                                    <ListDisc.Item><b>Malgache</b>: langue maternelle</ListDisc.Item>
                                    <ListDisc.Item><b>Français</b>: courant</ListDisc.Item>
                                    <ListDisc.Item><b>Anglais</b>: intermédiaire</ListDisc.Item>
                                </ListDisc>
                            </AboutCard.Body>
                        </AboutCard>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default AboutSection