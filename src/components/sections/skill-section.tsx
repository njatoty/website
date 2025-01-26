import { cn } from "../../utils"
import { MutedTitle, StrongTitle } from "../ui/heading-title"
import { CSSIcon, FireBaseIcon, HTMLIcon, JavaScriptIcon, JestIcon, JQueryIcon, MongoDBIcon, NextjsIcon, NodejsIcon, ReactjsIcon, SassIcon, TailwindcssIcon, TypeScriptIcon, ElectronIcon, PostgreSQLIcon } from "../ui/icons/dev"


const SkillSection = ({
    className
}: {
    className?: string
}) => {
    return (
        <div className={cn("w-full h-full", className)}>
            <div className="w-full col-span-1 max-md:col-span-2">
                <MutedTitle>Compétences Technique</MutedTitle>
                <StrongTitle>Quelles sont mes compétences techniques ?</StrongTitle>
                <p className="text-c-gray">
                    Au fil des années, j'ai acquis une expertise dans divers langages de programmation, frameworks et outils, qui me permettent de créer des solutions performantes et innovantes. Voici un aperçu des technologies que j'utilise au quotidien :
                </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-4 py-6 md:grid-cols-auto-fit-minmax">
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <ReactjsIcon size={30} />
                    <span>Reactjs</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <NextjsIcon size={30} />
                    <span>Nextjs</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <ElectronIcon size={30} />
                    <span>Electron</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <NodejsIcon size={30} />
                    <span>Nodejs</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <TypeScriptIcon size={30} />
                    <span>Typescript</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <JavaScriptIcon size={30} />
                    <span>JavaScript</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <HTMLIcon size={30} />
                    <span>HTML</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <CSSIcon size={30} />
                    <span>CSS</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <TailwindcssIcon size={30} />
                    <span>Tailwindcss</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <SassIcon size={30} />
                    <span>Sass</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <PostgreSQLIcon size={30} />
                    <span>PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <MongoDBIcon size={30} />
                    <span>MongoDB</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <FireBaseIcon size={30} />
                    <span>FireBase</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <JQueryIcon size={30} />
                    <span>JQuery</span>
                </div>
                <div className="flex items-center gap-2 p-1 border rounded-s-md border-c-dark1 bg-c-dark2 text-c-light">
                    <JestIcon size={30} />
                    <span>Jest</span>
                </div>
            </div>
        </div>
    )
}

export default SkillSection