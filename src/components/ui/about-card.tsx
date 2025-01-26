import { PropsWithChildren } from 'react'

const AboutCard = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex flex-col flex-1 gap-8">
            {children}
        </div>
    )
}

AboutCard.Icon = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex items-center justify-center p-3 border-2 border-purple-500 aspect-square w-fit">
            {children}
        </div>
    )
}

AboutCard.Title = ({ children }: PropsWithChildren) => {
    return (
        <div className="text-lg font-semibold title text-c-light">
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