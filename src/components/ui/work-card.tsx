import { PropsWithChildren } from 'react';
import { cn } from '../../utils';

const WorkCard = ({ children, className }: { className?: string } & PropsWithChildren) => {
    return (
        <div className={cn('flex flex-col overflow-hidden border rounded-lg border-c-dark0', className)}>
            {children}
        </div>
    )
}

WorkCard.Title = ({ children, className }: { className?: string } & PropsWithChildren) => {
    return (
        <h1 className={cn("text-c-light font-semibold text-pretty", className)}>
            {children}
        </h1>
    )
}

WorkCard.Image = ({ className, src }: { className?: string, src: string }) => {
    return (<div className="relative w-full">
        <img
            src={src}
            alt="image"
            loading='lazy'
            className={cn("w-full", className)}
        />
        <div className='absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-c-dark1 aspect-[16/9] object-cover' />
    </div>)
};

WorkCard.Body = ({ children }: PropsWithChildren) => {
    return (<div className="flex flex-col flex-grow w-full h-full gap-2 p-2 bg-c-dark1">
        {children}
    </div>)
};

WorkCard.TeckList = ({ children }: PropsWithChildren) => {
    return (<div className="flex flex-wrap items-center gap-1">
        {children}
    </div>)
};

WorkCard.Tech = ({ children }: PropsWithChildren) => {
    return (<div className="px-2 py-1 text-xs border rounded-lg text-nowrap whitespace-nowrap border-c-dark0 bg-c-dark2 text-c-purple1">
        {children}
    </div>)
};



export default WorkCard