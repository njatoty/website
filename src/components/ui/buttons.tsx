import React, { forwardRef } from 'react'
import { cn } from '../../utils';

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

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
    ({ children, className, variant = 'outline', ...props }, ref) => {
        const buttonClassName = {
            outline: "border-2 border-purple-500 text-purple-500 hover:text-c-dark3 hover:border-purple-600 hover:bg-purple-400 hover:bg-opacity-10 focus:border-purple-700 focus:text-purple-700 active:border-purple-800 active:text-purple-800 dark:border-purple-300 dark:text-purple-300 dark:hover:hover:bg-purple-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0",
            fill: "bg-purple-500 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-purple-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-purple-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-purple-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
        }
        return (
            <a
                {...props}
                ref={ref}
                className={cn(
                    'px-2 py-1 rounded-md flex items-center gap-2 w-fit',
                    buttonClassName[variant],
                    className
                )}
            >
                {children}
            </a>
        );
    }
);


export default Button