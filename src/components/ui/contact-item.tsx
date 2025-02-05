import React, { forwardRef } from 'react'
import { cn } from '../../utils'

const ContactItem = forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(({
    className,
    children,
    href,
    ...props
}, ref) => {
    return (
        <a href={href} ref={ref} className={cn('flex items-center w-fit hover:text-c-dark3 dark:hover:text-c-light text-c-dark0 dark:text-c-gray gap-4 p-1 hover:cursor-pointer', className)} {...props}>
            {children}
        </a>
    )
});

export default ContactItem