import React, { forwardRef } from 'react'
import { cn } from '../../utils';

type ButtonProps = {
    variant?: 'outline' | 'fill'
} & React.HTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, variant = 'outline', ...props }, ref) => {
        return (
            <button
                {...props}
                ref={ref}
                className={cn(
                    className,
                    'px-2 py-1 rounded-md',
                    variant === 'outline'
                        ? 'border border-c-dark0 bg-c-dark1 text-c-light hover:bg-c-dark0'
                        : ''
                )}
            >
                {children}
            </button>
        );
    }
);

type LinkButtonProps = {
    variant?: 'outline' | 'fill'
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
    ({ children, className, variant = 'outline', ...props }, ref) => {
        return (
            <a
                {...props}
                ref={ref}
                className={cn(
                    className,
                    'px-2 py-1 rounded-md',
                    variant === 'outline'
                        ? 'border border-c-dark0 bg-c-dark1 text-c-light hover:bg-c-dark0'
                        : ''
                )}
            >
                {children}
            </a>
        );
    }
);


export default Button