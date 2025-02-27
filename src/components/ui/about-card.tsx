import { PropsWithChildren } from 'react'

const AboutCard = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-col flex-1 gap-4 lg:gap-6">
            {children}
        </div>
    )
}

AboutCard.Icon = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex items-center justify-center p-3 border-2 border-violet-500 text-c-dark2 dark:text-c-light aspect-square w-fit">
            {children}
        </div>
    )
}

AboutCard.Title = ({ children }: PropsWithChildren) => {
    return (
        <div className="text-lg font-semibold title text-c-dark2 dark:text-c-light">
            {children}
        </div>
    )
}

AboutCard.Body = ({ children }: PropsWithChildren) => {
    return (
        <div className="w-full text-pretty">
            {children}
        </div>
    )
}

export default AboutCard