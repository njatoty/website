import React from 'react';
import { cn } from '../../utils';
import ThemeToggle from '../theme-toggle';
import Button from './buttons';
import { Link, Button as RCButton } from 'react-scroll';

type NavigationBarProps = React.HTMLAttributes<HTMLElement> & { activeMenu?: string };
const NavigationBar = React.forwardRef<HTMLElement, NavigationBarProps>(({
    className = ''
}, ref) => {

    const menuData = [
        {
            label: "A propos",
            link: "about"
        },
        {
            label: "Services",
            link: "service"
        },
        {
            label: "Compétences",
            link: "skill"
        }
    ];

    return (
        <nav ref={ref} className={cn('flex items-center justify-between w-full px-1 md:px-2 lg:px-3 py-2 border rounded-full', className)}>
            {/* Logo */}
            <div className='px-2 py-1 text-base font-extrabold rounded-sm lg:text-2xl text-c-light'>
                <img src='./tiny-favicon.png' className='w-7 md:w-8 lg:w-14' />
            </div>

            {/* Menu */}
            <div className='flex items-center flex-1 gap-2 divide-x justify-stretch lg:gap-4 divide-c-gray-0 dark:divide-c-dark1'>
                <ul className="flex items-center justify-center flex-1 gap-3 md:justify-end lg:gap-4">
                    {
                        menuData.map((menuItem, index) => (
                            <li key={index} className='text-sm cursor-pointer text-c-dark0 dark:text-c-gray dark:hover:text-purple-500 hover:text-purple-500 md:text-base lg:text-lg text-nowrap'>
                                <Link
                                    to={menuItem.link}
                                    smooth spy offset={-30}
                                    duration={500}
                                    activeClass='active'
                                >
                                    {menuItem.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                {/* Toggle Theme Button */}
                <div className='pl-1 md:pl-2 lg:pl-4'>
                    <ThemeToggle className='w-8 h-8 text-purple-500 md:w-10 md:h-10 aspect-square active:text-purple-800' iconSize={20} />
                </div>

                <div className="pl-1 md:pl-2 lg:pl-4">
                    <RCButton to='contact' smooth type='button' className='px-3 py-2 text-sm transition-all duration-100 ease-in border rounded-full lg:block lg:text-base max-md:hidden border-c-gray-0 bg-c-light text-c-dark0 dark:border-c-dark0 dark:bg-c-dark1 dark:text-c-light dark:hover:bg-c-dark0'>
                        Collaborons
                    </RCButton>
                </div>
            </div>
        </nav>
    )
});

NavigationBar.displayName = 'Nav';

export default NavigationBar;