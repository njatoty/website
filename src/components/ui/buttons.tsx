import React, { forwardRef } from 'react'
import { cn } from '../../utils';
import { Link } from 'react-router-dom';

type ButtonProps = {
    variant?: 'outline' | 'fill'
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, variant = 'outline', ...props }, ref) => {
        return (
            <button
                {...props}
                ref={ref}
                className={cn(
                    'px-2 py-1 rounded-md',
                    variant === 'outline'
                        ? 'border border-c-gray-0 bg-c-light text-c-dark0 dark:border-c-dark0 dark:bg-c-dark1 dark:text-c-light dark:hover:bg-c-dark0'
                        : '',
                    className,
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
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps & { color?: 'primary' | 'secondary' }>(
    ({ children, className, href, variant = 'outline', color = 'primary', ...props }, ref) => {
        const buttonClassName = {
            outline: {
                primary: "border-2 border-violet-500 text-violet-500 hover:text-violet-600 hover:border-violet-600 hover:bg-violet-400 hover:bg-opacity-10 focus:border-violet-700 focus:text-violet-700 active:border-violet-800 active:text-violet-800 dark:border-violet-300 dark:text-violet-300 dark:hover:bg-violet-300",
                secondary: "border-2 border-c-dark0 text-c-dark0 hover:text-c-light hover:bg-c-dark1 focus:border-slate-700 focus:text-slate-700 active:border-slate-800 active:text-slate-800 dark:border-c-gray dark:text-c-gray dark:hover:bg-c-dark1 dark:hover:text-c-light"
            },
            fill: {
                primary: "bg-violet-500 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-violet-600 focus:bg-violet-800 active:bg-violet-700",
                secondary: "bg-slate-500 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-slate-600 focus:bg-slate-800 active:bg-slate-700"
            }
        };

        return (
            <Link
                to={href!}
                {...props}
                ref={ref}
                className={cn(
                    'px-2 py-1 rounded flex items-center gap-2 w-fit transition duration-150 ease-in-out focus:outline-none focus:ring-0',
                    buttonClassName[variant][color],
                    className
                )}
            >
                {children}
            </Link>
        );
    }
);

export default Button