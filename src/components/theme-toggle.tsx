import React from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { cn } from '../utils';

type Theme = 'dark' | 'light';
type CustomProps = {
    iconSize?: number
}

const ThemeToggle = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement> & CustomProps>(({
    className = '',
    iconSize = 12,
    ...props
}, ref) => {

    const [theme, setTheme] = React.useState<Theme>((): Theme => {
        const currentTheme = localStorage.getItem('njatoty-theme') as Theme;
        if (currentTheme) return currentTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    React.useEffect(() => {
        // Add or remove the 'dark' class on the <html> tag
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Save the theme to localStorage
        localStorage.setItem('njatoty-theme', theme);
    }, [theme]);


    return (
        <button ref={ref} {...props} className={cn('flex items-center justify-center', className)} type='button' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {
                theme === 'dark' ?
                    <BsMoonStars size={iconSize} />
                    :
                    <BsSun size={iconSize} />
            }
        </button>
    )
});

export default ThemeToggle