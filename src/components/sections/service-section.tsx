import { FaCubes, FaDatabase, FaDesktop, FaLaptopCode, FaServer } from "react-icons/fa"
import { cn } from "../../utils"
import ServiceCard from "../ui/service-card"
import { MutedTitle, StrongTitle } from "../ui/heading-title"

const ServiceSection = ({ className }: { className?: string }) => {
    return (
        <div className={cn('w-full', className)}>
            <div className="w-full col-span-1 max-md:col-span-2">
                <MutedTitle>Mes services</MutedTitle>
                <StrongTitle>Quels services puis-je vous offrir ?</StrongTitle>
                <p className="text-c-gray">
                    En tant que développeur full-stack, je propose des services de développement frontend et backend avec les technologies suivantes:
                </p>
            </div>
            <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2 lg:grid-cols-3">
                <ServiceCard>
                    <ServiceCard.Icon>
                        <FaLaptopCode size={32} />
                    </ServiceCard.Icon>
                    <ServiceCard.Body>
                        <ServiceCard.Title>Frontend</ServiceCard.Title>
                        <ServiceCard.Description>
                            <ul className="list-disc list-inside">
                                <li>Création d'interfaces modernes et dynamiques avec React.js et Next.js.</li>
                                <li>Développement de designs réactifs adaptés à tous les appareils.</li>
                                <li>Intégration de bibliothèques UI comme Tailwind CSS et Material-UI.</li>
                            </ul>
                        </ServiceCard.Description>
                    </ServiceCard.Body>
                </ServiceCard>

                <ServiceCard>
                    <ServiceCard.Icon>
                        <FaServer size={32} />
                    </ServiceCard.Icon>
                    <ServiceCard.Body>
                        <ServiceCard.Title>Backend</ServiceCard.Title>
                        <ServiceCard.Description>
                            <ul className="list-disc list-inside">
                                <li>Création d'API RESTful robustes avec Node.js et Express.js.</li>
                                <li>Gestion des bases de données MongoDB (Mongoose) et MySQL.</li>
                                <li>Mise en place de systèmes d'authentification et de sécurité.</li>
                            </ul>
                        </ServiceCard.Description>
                    </ServiceCard.Body>
                </ServiceCard>

                <ServiceCard>
                    <ServiceCard.Icon>
                        <FaDatabase size={32} />
                    </ServiceCard.Icon>
                    <ServiceCard.Body>
                        <ServiceCard.Title>Base de données</ServiceCard.Title>
                        <ServiceCard.Description>
                            <ul className="list-disc list-inside">
                                <li>Gestion et optimisation des bases de données relationnelles avec PostgreSQL et SQL.</li>
                                <li>Utilisation des bases de données NoSQL comme MongoDB.</li>
                                <li>Développement d'applications avec Firebase pour les données en temps réel.</li>
                            </ul>
                        </ServiceCard.Description>
                    </ServiceCard.Body>
                </ServiceCard>

                <ServiceCard>
                    <ServiceCard.Icon>
                        <FaDesktop size={32} />
                    </ServiceCard.Icon>
                    <ServiceCard.Body>
                        <ServiceCard.Title>Applications de bureau</ServiceCard.Title>
                        <ServiceCard.Description>
                            <ul className="list-disc list-inside">
                                <li>Développement d'applications multiplateformes avec Electron.js.</li>
                                <li>Intégration de fonctionnalités natives comme la gestion des fichiers.</li>
                                <li>Compatibilité avec Windows, macOS et Linux.</li>
                            </ul>
                        </ServiceCard.Description>
                    </ServiceCard.Body>
                </ServiceCard>

                <ServiceCard>
                    <ServiceCard.Icon>
                        <FaCubes size={32} />
                    </ServiceCard.Icon>
                    <ServiceCard.Body>
                        <ServiceCard.Title>Full-Stack</ServiceCard.Title>
                        <ServiceCard.Description>
                            <ul className="list-disc list-inside">
                                <li>Développement d'applications complètes avec Next.js (Frontend) et Node.js (Backend).</li>
                                <li>Déploiement sur des plateformes cloud comme Vercel, Heroku ou AWS.</li>
                                <li>Maintenance et optimisation des performances des applications.</li>
                            </ul>
                        </ServiceCard.Description>
                    </ServiceCard.Body>
                </ServiceCard>
            </div>
        </div>
    )
}

export default ServiceSection