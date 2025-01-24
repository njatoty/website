import { cn } from "../../utils"
import { MdOutlineWeb, MdOutlineWorkspacePremium } from "react-icons/md";
import { IconBaseProps } from "react-icons";
import { GiHorizonRoad } from "react-icons/gi";

const GradientButton = ({
    children, className, Icon
}: {
    children: React.ReactNode, className?: string,
    Icon?: React.ComponentType<IconBaseProps>
}) => {
    return (
        <button className={cn("grid grid-cols-3 p-2 w-full h-full text-sm shadow-sm bg-gradient-to-b from-c-dark1 to-c-dark1 text-c-light lg:text-base xl:text-lgs", className)} type="button">
            {
                Icon &&
                <div className="flex items-center justify-center col-span-1 p-3">
                    <Icon size={32} className="flex-1 flex-shrink-0 text-purple-400" />
                </div>
            }
            <div className="flex flex-col items-start justify-center h-full col-span-2">
                {children}
            </div>
        </button>
    )
};

const HeroSection = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex flex-col md:justify-center gap-10 lg:gap-32 h-full w-full relative py-10", className)} id='hero'>

            <div className="relative z-10 flex items-center w-full gap-2 max-md:flex-col">
                <div className="flex flex-col justify-center flex-1 w-full">
                    <h1 className='flex flex-col gap-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-slate-900 dark:text-slate-200 max-md:text-center'>
                        <span>Bonjour,</span>
                        <span>Je suis <span className='text-transparent bg-gradient-to-br from-pink-400 via-purple-500 to-purple-500 bg-clip-text'>Njatotiana</span>,</span>
                        <span className='font-light max-md:text-center text-c-gray'>Développeur Web Fullstack React/Node</span>
                    </h1>
                    <p className="max-w-md p-3 my-2 border-l-4 border-purple-900 lg:p-4 text-c-gray max-md:text-center max-md:mx-auto max-md:border-none">
                        Je conçois et code des choses mangifiquement simples. Je suis passionné par mon travail.
                    </p>
                </div>
                <div className="flex items-center justify-center flex-1">
                    <div
                        className="p-10 text-purple-300 text-7xl aspect-square w-52 lg:w-80"
                        style={{
                            background: 'url("./favicon.png")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                </div>
            </div>

            {/* Download my cv button */}
            <div className="flex items-center w-full gap-1">
                <hr className="flex-1 border border-c-dark1" />
                <div className="grid grid-cols-3 gap-0 max-md:divide-y lg:divide-x divide-c-dark3 max-md:grid-cols-1">
                    <GradientButton Icon={MdOutlineWorkspacePremium}>

                        <span>3 ans d'expérience</span>
                        <span className="text-c-gray">Travail</span>
                    </GradientButton>
                    <GradientButton Icon={MdOutlineWeb}>
                        <span>+10 projets réalisés</span>
                        <span className="text-c-gray">Terminé</span>
                    </GradientButton>
                    <GradientButton Icon={GiHorizonRoad} className="from-purple-950 to-purple-950 hover:from-purple-900 hover:to-purple-950">
                        <span>Découvrez mon parcours</span>
                        <span className="text-c-gray">Résumé</span>

                    </GradientButton>
                </div>

                <hr className="flex-1 border border-c-dark1" />
            </div>
        </div>
    )
}

export default HeroSection