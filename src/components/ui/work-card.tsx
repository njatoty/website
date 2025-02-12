import { PropsWithChildren } from 'react';
import { cn } from '../../utils';
import { HiOutlineExternalLink } from 'react-icons/hi';

const WorkCard = ({ children, className }: { className?: string } & PropsWithChildren) => {
    return (
        <article className={cn('flex flex-col overflow-hidden border rounded-lg border-c-gray-0 dark:border-c-dark0', className)}>
            {children}
        </article>
    )
}

WorkCard.Title = ({ children, className, link }: { className?: string, link?: string } & PropsWithChildren) => {
    return (
        <h1 className={cn("text-c-dark0 dark:text-c-light font-semibold text-pretty flex items-center gap-2", className)}>
            {children}
            {link && <a href={link} target='_blank' className='opacity-60 hover:opacity-100'>
                <HiOutlineExternalLink size={16} />
            </a>}
        </h1>
    )
}

WorkCard.Image = ({ className, src }: { className?: string, src: string }) => {
    return (<div className="relative w-full">
        <img
            src={src}
            alt="image"
            loading='lazy'
            className={cn("w-full object-contain ", className)}
        />
    </div>)
};

WorkCard.Body = ({ children }: PropsWithChildren) => {
    return (<div className="flex flex-col flex-grow w-full h-full gap-2 p-2 bg-c-light dark:bg-c-dark1">
        {children}
    </div>)
};

WorkCard.TeckList = ({ children }: PropsWithChildren) => {
    return (<div className="flex flex-wrap items-center gap-1">
        {children}
    </div>)
};

WorkCard.Tech = ({ children }: PropsWithChildren) => {
    return (<div className="px-2 py-1 text-xs bg-white border rounded-lg text-nowrap whitespace-nowrap border-c-gray-0 text-c-dark0 dark:border-c-dark0 dark:bg-c-dark2 dark:text-c-purple1">
        {children}
    </div>)
};



export default WorkCard