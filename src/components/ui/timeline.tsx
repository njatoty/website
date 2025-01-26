import { PropsWithChildren } from 'react'
import { cn } from '../../utils';

type TimeLineProps = {
    className?: string
} & PropsWithChildren;

const TimeLine = ({ children, className }: TimeLineProps) => {
    return (
        <div className={cn('flex flex-col', className)}>
            {children}
        </div>
    )
}


TimeLine.Item = ({ children, className }: TimeLineProps) => {
    return (
        <div className={cn('border-l-2 pl-2 flex-grow', className)}>
            {children}
        </div>
    )
}

export default TimeLine