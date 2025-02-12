import { cn } from '@/utils';
import React, { PropsWithChildren } from 'react'
import { TbLogs } from 'react-icons/tb';

type JumbotronProps = {
    className?: string,
    tagIcon?: React.ReactElement
} & PropsWithChildren;
const Jumbotron = ({ className, children, tagIcon }: JumbotronProps) => {
    return (
        <div className={cn('w-full flex items-start max-md:gap-4 gap-8 bg-gradient-to-br from-purple-600 to-purple-700 text-c-light rounded-md max-md:p-4 p-8', className)}>
            <TbLogs size={64} className='opacity-50 max-md:hidden' />
            <div className="flex-1">
                {children}
            </div>
            {tagIcon && tagIcon}
        </div>
    )
}

export default Jumbotron