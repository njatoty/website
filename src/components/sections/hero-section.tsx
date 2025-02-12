import { cn } from "../../utils"
import { MdOutlineWeb, MdOutlineWorkspacePremium } from "react-icons/md";
import { IconBaseProps } from "react-icons";
import { GiHorizonRoad } from "react-icons/gi";
import MaxWidthWrapper from "../ui/max-width-wrapper";
import { Button } from "react-scroll";

const GradientButton = ({
    children, className, Icon, to
}: {
    children: React.ReactNode, className?: string, to: string
    Icon?: React.ComponentType<IconBaseProps>
}) => {
    return (
        <Button to={to} smooth offset={-50} className={cn("flex items-center p-2 w-full h-full shadow-sm bg-c-light dark:bg-c-dark1 text-c-dark0 dark:text-c-light lg:text-base xl:text-lgs", className)} type="button">
            {
                Icon &&
                <div className="flex items-center justify-center col-span-1 p-3">
                    <Icon size={32} className="flex-1 flex-shrink-0 text-purple-400" />
                </div>
            }
            <div className="flex flex-col items-start justify-center h-full col-span-2">
                {children}
            </div>
        </Button>
    )
};

const HeroSection = ({ className }: { className?: string }) => {
    return (
        <section
            className={cn("flex flex-col", className)}
            id="hero"
        >
            <MaxWidthWrapper className="relative flex flex-col w-full h-full gap-10 px-2 py-10 mx-auto md:justify-center lg:gap-32">
                <div className="relative z-10 flex items-center w-full gap-2 md:pt-10 max-md:flex-col">
                    <div className="flex flex-col justify-center flex-1 w-full">
                        <h1 className='flex flex-col gap-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-slate-900 dark:text-slate-200 max-md:text-center'>
                            <span>Bonjour,</span>
                            <span>Je suis <span className='text-transparent bg-gradient-to-br from-pink-400 via-purple-500 to-purple-500 bg-clip-text'>Njatotiana</span>,</span>
                            <span className='font-light max-md:text-center text-c-dark0 dark:text-c-gray'>Développeur Web Fullstack React/Node</span>
                        </h1>
                        <p className="max-w-md p-3 my-2 border-l-4 border-purple-400 dark:border-purple-900 lg:p-4 text-c-dark0 dark:text-c-gray max-md:text-center max-md:mx-auto max-md:border-none">
                            Je conçois et code des choses mangifiquement simples. Je suis passionné par mon travail.
                        </p>
                    </div>
                    <div className="flex items-center justify-center flex-1">
                        <img src={'/favicon.svg'} className="w-3/4 max-w-sm aspect-square" />
                    </div>
                </div>

                {/* Download my cv button */}
                <div className="flex items-center w-full gap-1">
                    <hr className="flex-1 border border-c-gray-0 dark:border-c-dark1" />
                    <div className="grid grid-cols-3 gap-0 max-md:divide-y lg:divide-x divide-c-gray-0 dark:divide-c-dark3 max-md:grid-cols-1">
                        <GradientButton to='' Icon={MdOutlineWorkspacePremium} className="rounded-l-sm">
                            <span className="text-left">3 ans d'expérience</span>
                            <span className="text-c-gray">Travail</span>
                        </GradientButton>
                        <GradientButton to='project' Icon={MdOutlineWeb}>
                            <span className="text-left">+10 projets réalisés</span>
                            <span className="text-c-gray">Terminé</span>
                        </GradientButton>
                        <GradientButton to="experiment" Icon={GiHorizonRoad} className="rounded-r-sm">
                            <span className="text-left">Découvrez mon parcours</span>
                            <span className="text-c-gray">Résumé</span>

                        </GradientButton>
                    </div>

                    <hr className="flex-1 border border-c-gray-0 dark:border-c-dark1" />
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default HeroSection