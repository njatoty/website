import { cn } from "../../utils"
import { MdOutlineWorkspacePremium } from "react-icons/md"
import { PiGraduationCapFill } from "react-icons/pi"
import { TbJewishStar } from "react-icons/tb"
import { BiWorld } from "react-icons/bi"
import { MutedTitle, StrongTitle } from "../ui/heading-title"

const AboutSection = ({ className }: { className?: string }) => {
    return (
        <div className={cn("w-full", className)} id='about'>
            <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1">
                <div className="w-full col-span-1 max-md:col-span-2">
                    <MutedTitle>A propos de moi</MutedTitle>
                    <StrongTitle>Qui suis-je?</StrongTitle>
                    <p className="text-c-gray">
                        Développeur web passionné, spécialisé en solutions web innovantes. Avec une expertise en frontend et backend, je crée des expériences utilisateur fluides et performantes.
                    </p>
                </div>
                <div className="grid w-full grid-cols-2 col-span-2 gap-10 max-sm:grid-cols-1">
                    {/* Parcours */}
                    <div className="flex flex-col flex-1 gap-8">
                        <div className="flex items-center justify-center p-3 border-2 border-purple-500 aspect-square w-fit">
                            <MdOutlineWorkspacePremium size={24} />
                        </div>
                        <div className="text-lg font-semibold title text-c-light">
                            <span>Expérience professionnelle</span>
                        </div>
                        <div className="content text-c-gray">
                            <p>
                                Développeur Fullstack chez <a href="https://www.solumada.mg" target="__blank" className="font-bold">Solumada</a> depuis janvier 2022. Actuellement en poste, je contribue aux projets de l'entreprise avec expertise et professionnalisme.
                            </p>
                        </div>
                    </div>

                    {/* Parcours et Education */}
                    <div className="flex flex-col flex-1 gap-8">
                        <div className="flex items-center justify-center p-3 border-2 border-purple-500 aspect-square w-fit">
                            <PiGraduationCapFill size={24} />
                        </div>
                        <div className="text-lg font-semibold title text-c-light">
                            <span>Parcours et Education</span>
                        </div>
                        <div className="content text-c-gray">
                            <p>
                                Titulaire d'une licence en Informatique, spécialisation Applications et Génie Logiciel, obtenue à <a href="https://zurcher.edu.mg" target="__blank" className="font-bold">Université Adventist Zurcher</a> le 14 novembre 2021.
                            </p>
                        </div>
                    </div>

                    {/* Intérêts professionnels */}
                    <div className="flex flex-col flex-1 gap-8">
                        <div className="flex items-center justify-center p-3 border-2 border-purple-500 aspect-square w-fit">
                            <TbJewishStar size={24} />
                        </div>
                        <div className="text-lg font-semibold title text-c-light">
                            <span>Intérêts professionnels</span>
                        </div>
                        <div className="content text-c-gray">
                            <p>
                                Passionné par le développement web, j'ai un fort intérêt pour les frameworks comme React et Next.js, qui me permettent de créer des applications performantes et scalables. J'explore également l'intégration de TypeScript et l'optimisation des performances pour améliorer l'expérience utilisateur.
                            </p>
                        </div>
                    </div>

                    {/* Langues */}
                    <div className="flex flex-col flex-1 gap-8">
                        <div className="flex items-center justify-center p-3 border-2 border-purple-500 aspect-square w-fit">
                            <BiWorld size={24} />
                        </div>
                        <div className="text-lg font-semibold title text-c-light">
                            <span>Langues maitrisés</span>
                        </div>
                        <div className="content text-c-gray">
                            <p>
                                Je parle plusieurs langues, ce qui me permet de travailler dans des environnements internationaux et de collaborer avec des équipes diversifiées.
                            </p>
                            <ul className="w-full my-2">
                                <li className="list-disc list-inside"><b>Malgache</b>: langue maternelle</li>
                                <li className="list-disc list-inside"><b>Français</b>: Courant</li>
                                <li className="list-disc list-inside"><b>Anglais</b>: Intermédiaire</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection