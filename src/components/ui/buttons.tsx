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
                primary: "border-2 border-purple-500 text-purple-500 hover:text-purple-600 hover:border-purple-600 hover:bg-purple-400 hover:bg-opacity-10 focus:border-purple-700 focus:text-purple-700 active:border-purple-800 active:text-purple-800 dark:border-purple-300 dark:text-purple-300 dark:hover:bg-purple-300",
                secondary: "border-2 border-c-dark0 text-c-dark0 hover:text-c-light hover:bg-c-dark1 focus:border-slate-700 focus:text-slate-700 active:border-slate-800 active:text-slate-800 dark:border-c-gray dark:text-c-gray dark:hover:bg-c-dark1 dark:hover:text-c-light"
            },
            fill: {
                primary: "bg-purple-500 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-purple-600 focus:bg-purple-800 active:bg-purple-700",
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