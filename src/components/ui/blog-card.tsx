import React, { PropsWithChildren } from 'react'
import { Paragraph } from './typography'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

type Props = { className?: string } & PropsWithChildren;

const Blogcard = ({ children, href }: { href: string } & Props) => {
    return (
        <Link to={href} className="flex items-center justify-between w-full p-4 transition-all duration-150 ease-in-out border rounded-md group border-c-gray-0 dark:border-c-dark0 bg-c-light dark:bg-c-dark3 hover:bg-c-gray-0 dark:hover:bg-c-dark1 hover:cursor-pointer">
            <div className="w-full">
                {children}
            </div>
            <button className="p-4 opacity-20 text-c-dark3 dark:text-c-light group-hover:opacity-50">
                <FaArrowRight size={32} />
            </button>
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

Blogcard.Description = ({ children }: Props) => {
    return (
        <Paragraph className="line-clamp-3">
            {children}
        </Paragraph>
    )
}

export default Blogcard