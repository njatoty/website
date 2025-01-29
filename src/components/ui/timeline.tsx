import { PropsWithChildren } from 'react'
import { cn } from '../../utils';

type TimelineProps = {
    className?: string
} & PropsWithChildren;

const Timeline = ({ children, className }: TimelineProps) => {
    return (
        <div className={cn('flex flex-col relative', className)}>
            {children}
        </div>
    )
}


Timeline.Body = ({ children, className }: TimelineProps) => {
    return (
        <div className={cn('border-l-4 border-c-gray dark:border-c-dark0 px-4 flex-grow py-2', className)}>
            {children}
        </div>
    )
}

Timeline.Date = ({ children, className }: TimelineProps) => {
    return (
        <h2 className={cn('font-bold text-c-dark0 dark:text-c-gray flex items-center gap-4 w-full leading-none -translate-x-1', className)}>
            <span className='w-3 h-3 rounded-full bg-c-dark0 dark:bg-c-gray aspect-square'></span>
            {children}
        </h2>
    )
}

Timeline.Title = ({ children, className }: TimelineProps) => {
    return (
        <h3 className={cn('text-purple-500 font-bold w-fit', className)}>
            {children}
        </h3>
    )
}

Timeline.Tag = ({ children, className }: TimelineProps) => {
    return (
        <h4 className={cn('p-0 bg-transparent text-c-dark3 dark:text-c-gray border-none w-fit font-normal', className)}>
            {children}
        </h4>
    )
}
Timeline.Badge = ({ children, className }: TimelineProps) => {
    return (
        <span className={cn('px-2 py-1 rounded-lg border bg-c-light border-c-gray-0 text-c-dark0 font-normal w-fit text-sm', className)}>
            {children}
        </span>
    )
}

Timeline.Badges = ({ children, className }: TimelineProps) => {
    return (
        <div className={cn('flex items-start flex-wrap gap-1', className)}>
            {children}
        </div>
    )
}
export default Timeline