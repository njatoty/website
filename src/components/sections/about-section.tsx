import { MdOutlineWorkspacePremium } from "react-icons/md"
import { TbJewishStar } from "react-icons/tb"
import { PiGraduationCapFill } from "react-icons/pi"
import { BiWorld } from "react-icons/bi"
import { ListDisc, MutedTitle, Paragraph, StrongTitle } from "@/components/ui/typography"
import AboutCard from "@/components/ui/about-card"
import MaxWidthWrapper from "@/components/ui/max-width-wrapper"
import { cn } from "@/utils"

const AboutSection = ({ className }: { className?: string }) => {
    return (
        <section id="about" className={cn("w-full flex", className)}>
            <MaxWidthWrapper className="px-2 mx-auto">
                <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
                    <div className="w-full col-span-1 max-md:col-span-2">
                        <MutedTitle>A propos de moi</MutedTitle>
                        <StrongTitle>Qui suis-je?</StrongTitle>
                        <Paragraph>
                            Moi, c'est <span className="font-semibold">ANDRIAMANIRISOA Njatotiana Fiononana</span>, un développeur web passionné par la création de solutions innovantes. Fort d'une expertise en frontend et backend, je transforme des idées en solutions digitales efficaces et adaptées aux besoins des utilisateurs.
                        </Paragraph>
                        <div className="flex-col items-center justify-center hidden w-full gap-2 my-6">
                            <div className="img max-w-[250px]  dark:border-violet-600/40 border-c-gray-0 relative w-full aspect-square dark:bg-c-dark2 overflow-hidden">
                                <img src="/profile/me.png" alt="me" className="absolute object-cover w-full scale-125 dark:mix-blend-lighten mix-blend-darken aspect-square dark:bg-c-dark3" />
                            </div>
                        </div>
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
                                    Avec 3 ans d'expérience en développement web, j'interviens sur divers projets en apportant expertise et professionnalisme.
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
                                    Diplômé en Informatique avec une spécialisation en Applications et Génie Logiciel.
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
        </section>
    )
}

export default AboutSection