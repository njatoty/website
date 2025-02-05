import { FaCubes, FaDatabase, FaDesktop, FaLaptopCode, FaServer } from "react-icons/fa"
import { cn } from "../../utils"
import ServiceCard from "../ui/service-card"
import { ListDisc, MutedTitle, Paragraph, StrongTitle } from "../ui/typography"
import MaxWidthWrapper from "../ui/max-width-wrapper"

const ServiceSection = ({ className }: { className?: string }) => {
    return (
        <section className={cn('w-full flex', className)} id="service">
            <MaxWidthWrapper className="mx-auto">
                <div className="w-full col-span-1 max-md:col-span-2">
                    <MutedTitle>Mes services</MutedTitle>
                    <StrongTitle>Quels services puis-je vous offrir ?</StrongTitle>
                    <Paragraph>
                        En tant que développeur full-stack, je propose des services de développement frontend et backend avec les technologies suivantes:
                    </Paragraph>
                </div>
                <div className="grid grid-cols-1 gap-10 mt-8 md:grid-cols-2 lg:grid-cols-3">
                    <ServiceCard>
                        <ServiceCard.Icon>
                            <FaLaptopCode size={32} />
                        </ServiceCard.Icon>
                        <ServiceCard.Body>
                            <ServiceCard.Title>Frontend</ServiceCard.Title>
                            <ServiceCard.Description>
                                <ListDisc className="list-disc list-inside">
                                    <ListDisc.Item>Création d'interfaces modernes et dynamiques avec React.js et Next.js.</ListDisc.Item>
                                    <ListDisc.Item>Développement de designs réactifs adaptés à tous les appareils.</ListDisc.Item>
                                    <ListDisc.Item>Intégration de bibliothèques UI comme Tailwind CSS et Material-UI.</ListDisc.Item>
                                </ListDisc>
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
                                <ListDisc className="list-disc list-inside">
                                    <ListDisc.Item>Création d'API RESTfull robustes avec Node.js et Express.js.</ListDisc.Item>
                                    <ListDisc.Item>Gestion des bases de données MongoDB (Mongoose) et MySQL.</ListDisc.Item>
                                    <ListDisc.Item>Mise en place de systèmes d'authentification et de sécurité.</ListDisc.Item>
                                </ListDisc>
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
                                <ListDisc className="list-disc list-inside">
                                    <ListDisc.Item>Gestion et optimisation des bases de données relationnelles avec PostgreSQL et SQL.</ListDisc.Item>
                                    <ListDisc.Item>Utilisation des bases de données NoSQL comme MongoDB.</ListDisc.Item>
                                    <ListDisc.Item>Développement d'applications avec Firebase pour les données en temps réel.</ListDisc.Item>
                                </ListDisc>
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
                                <ListDisc className="list-disc list-inside">
                                    <ListDisc.Item>Développement d'applications multiplateformes avec Electron.js.</ListDisc.Item>
                                    <ListDisc.Item>Intégration de fonctionnalités natives comme la gestion des fichiers.</ListDisc.Item>
                                    <ListDisc.Item>Compatibilité avec Windows, macOS et Linux.</ListDisc.Item>
                                </ListDisc>
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
                                <ListDisc className="list-disc list-inside">
                                    <ListDisc.Item>Développement d'applications complètes avec Next.js ou React (Frontend) et Node.js (Backend).</ListDisc.Item>
                                    <ListDisc.Item>Déploiement sur des plateformes cloud comme Vercel, Heroku ou AWS.</ListDisc.Item>
                                    <ListDisc.Item>Maintenance et optimisation des performances des applications.</ListDisc.Item>
                                </ListDisc>
                            </ServiceCard.Description>
                        </ServiceCard.Body>
                    </ServiceCard>
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default ServiceSection