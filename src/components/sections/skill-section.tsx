import { PropsWithChildren } from "react"
import { cn } from "../../utils"
import { MutedTitle, Paragraph, StrongTitle } from "../ui/typography"
import { CSSIcon, FireBaseIcon, HTMLIcon, JavaScriptIcon, JestIcon, JQueryIcon, MongoDBIcon, NextjsIcon, NodejsIcon, ReactjsIcon, SassIcon, TailwindcssIcon, TypeScriptIcon, ElectronIcon, PostgreSQLIcon, GithubIcon, GitIcon } from "../ui/icons/dev"
import MaxWidthWrapper from "../ui/max-width-wrapper";

const skills = [
    { Icon: ReactjsIcon, label: "React" },
    { Icon: NextjsIcon, label: "Next.js" },
    { Icon: ElectronIcon, label: "Electron" },
    { Icon: NodejsIcon, label: "Nodejs" },
    { Icon: TypeScriptIcon, label: "Typescript" },
    { Icon: JavaScriptIcon, label: "JavaScript" },
    { Icon: HTMLIcon, label: "HTML" },
    { Icon: CSSIcon, label: "CSS" },
    { Icon: TailwindcssIcon, label: "Tailwindcss" },
    { Icon: SassIcon, label: "Sass" },
    { Icon: PostgreSQLIcon, label: "PostgreSQL" },
    { Icon: MongoDBIcon, label: "MongoDB" },
    { Icon: FireBaseIcon, label: "FireBase" },
    { Icon: JQueryIcon, label: "JQuery" },
    { Icon: JestIcon, label: "Jest" },
    { Icon: GithubIcon, label: "Github" },
    { Icon: GitIcon, label: "Git" },
];

const SkillItem = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex items-center gap-2 p-1 text-sm border rounded-md lg:text-base border-c-dark0 bg-c-dark2 text-c-light">
            {children}
        </div>
    )
}


const SkillSection = ({
    className
}: {
    className?: string
}) => {
    return (
        <div className={cn("w-full h-full flex", className)}>
            <MaxWidthWrapper className="mx-auto">
                <div className="w-full">
                    <MutedTitle>Compétences Technique</MutedTitle>
                    <StrongTitle>Quelles sont mes compétences techniques ?</StrongTitle>
                    <Paragraph>
                        Au fil des années, j'ai acquis une expertise dans divers langages de programmation, frameworks et outils, qui me permettent de créer des solutions performantes et innovantes. Voici un aperçu des technologies que j'utilise au quotidien:
                    </Paragraph>
                </div>
                <div className="grid w-full grid-cols-2 gap-4 py-6 md:grid-cols-auto-fit-minmax">
                    {
                        skills.map((skill, index) => (
                            <SkillItem key={index}>
                                <skill.Icon size={30} />
                                <span>{skill.label}</span>
                            </SkillItem>
                        ))
                    }
                </div>
            </MaxWidthWrapper>
        </div>
    )
}

export default SkillSection