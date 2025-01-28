import { cn } from "../../utils"

const ServiceCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('relative w-full mb-8 group', className)}>
            {children}
        </div>
    )
}


ServiceCard.Icon = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative z-20 flex items-center justify-center w-16 h-16 mx-auto bg-purple-400 rounded-lg dark:bg-purple-500 aspect-square text-c-light group-hover:bg-c-light group-hover:text-purple-500">
            {children}
        </div>
    )
}

ServiceCard.Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-center my-3 text-lg">
            <h3 className="font-semibold text-center text-c-dark2 dark:text-c-light">{children}</h3>
        </div>
    )
}

ServiceCard.Body = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col w-full h-full px-4 py-8 -my-8 border rounded-lg bg-c-light border-c-gray-0 dark:border-c-dark0 dark:bg-c-dark2 dark:group-hover:bg-purple-950">
            {children}
        </div>
    )
}

ServiceCard.Description = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-4 text-pretty">{children}</div>
    )
}

export default ServiceCard;