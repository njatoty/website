import React from 'react';
import { cn } from '../../utils';
import ThemeToggle from '../theme-toggle';
import Button from './buttons';

type NavigationBarProps = React.HTMLAttributes<HTMLElement>;
const NavigationBar = React.forwardRef<HTMLElement, NavigationBarProps>(({
    className = ''
}, ref) => {

    const menuData = [
        {
            label: "A propos",
            link: ""
        },
        {
            label: "Services",
            link: ""
        },
        {
            label: "Projets",
            link: ""
        },
        {
            label: "Blog",
            link: ""
        }
    ];

    return (
        <nav ref={ref} className={cn('flex items-center justify-between w-full px-2 lg:px-3 py-1 lg:py-2 border rounded-full', className)}>
            {/* Logo */}
            <div className='px-2 py-1 text-base font-extrabold rounded-sm lg:text-2xl text-c-light'>
                <img src='./tiny-favicon.png' className='w-8 lg:w-14' />
            </div>

            {/* Menu */}
            <div className='flex items-center flex-1 gap-2 divide-x justify-stretch lg:gap-4 divide-c-gray-0 dark:divide-c-dark1'>
                <ul className="flex items-center justify-end flex-1 gap-3 lg:gap-4">
                    {
                        menuData.map((menuItem, index) => (
                            <li key={index} className='text-sm text-c-dark0 dark:text-c-gray hover:text-purple-500 md:text-base lg:text-lg text-nowrap'>
                                <a href="#">{menuItem.label}</a>
                            </li>
                        ))
                    }
                </ul>

                {/* Toggle Theme Button */}
                <div className='pl-2 lg:pl-4'>
                    <ThemeToggle className='w-10 h-10 text-purple-500 aspect-square active:text-purple-800' iconSize={20} />
                </div>

                <div className="pl-2 lg:pl-4">
                    <Button type='button' className='px-3 py-2 text-sm transition-all duration-100 ease-in border rounded-full lg:block lg:text-base max-md:hidden'>
                        Collaborons
                    </Button>
                </div>
            </div>
        </nav>
    )
});

NavigationBar.displayName = 'Nav';

export default NavigationBar;