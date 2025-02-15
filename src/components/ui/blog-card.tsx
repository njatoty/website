import React, { PropsWithChildren } from 'react'
import { Paragraph } from './typography'
import { Link } from 'react-router-dom';
import { cn } from '@/utils';
import { PiArrowRightLight } from 'react-icons/pi';

type Props = { className?: string } & PropsWithChildren;

const Blogcard = ({ children, href }: { href: string } & Props) => {
    return (
        <Link to={href} className="relative z-10 block w-full max-w-3xl p-4 mx-auto transition-all duration-150 ease-in-out bg-white border border-b-4 rounded-md group border-c-gray-0 dark:border-c-dark0 dark:bg-c-dark1 hover:bg-c-light dark:hover:bg-c-dark2 hover:cursor-pointer border-b-purple-500 dark:border-b-purple-400">
            <button className="float-right p-4 opacity-20 text-c-dark3 dark:text-c-light group-hover:opacity-50">
                <PiArrowRightLight size={24} />
            </button>
            <div className="w-full">
                {children}
            </div>
        </Link>
    )
}

Blogcard.Title = ({ children }: Props) => {
    return (
        <h1 className="mb-3 text-lg font-bold text-c-dark3 dark:text-c-light">
            {children}
        </h1>
    )
}

Blogcard.Number = ({ children }: Props) => {
    return (
        <span className="mr-2 text-purple-500">
            #{children}
        </span>
    )
}

Blogcard.Description = ({ children, className }: Props) => {
    return (
        <Paragraph className={cn("line-clamp-2 lg:line-clamp-3", className)}>
            {children}
        </Paragraph>
    )
}


Blogcard.Footer = ({ children, className }: Props) => {
    return (
        <div className={cn("flex items-stretch divide-x divide-c-gray dark:divide-c-dark0 gap-3", className)}>
            {children}
        </div>
    )
}

Blogcard.Date = ({ children, className }: Props) => {
    return (
        <Paragraph className={cn("text-sm opacity-60 pl-3", className)}>
            Date: {children}
        </Paragraph>
    )
}

Blogcard.Estimation = ({ children, className }: Props) => {
    return (
        <Paragraph className={cn("text-sm opacity-60 pl-3", className)}>
            ~ {children}
        </Paragraph>
    )
}

export default Blogcard