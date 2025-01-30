import React from 'react'
import { cn } from '../../utils'
import MaxWidthWrapper from '../ui/max-width-wrapper';

const FooterSection = ({ className }: { className?: string }) => {
    const date = new Date();
    return (
        <div className={cn('w-full border-t border-c-gray-0 dark:border-c-dark0 text-center text-sm font-light p-8 text-c-dark0 dark:text-c-gray', className)}>
            <MaxWidthWrapper className='mx-auto text-center'>
                <span>Copyright &copy; {date.getFullYear()} - Njatotiana Fiononana - Tous droits réservés.</span>
            </MaxWidthWrapper>
        </div>
    )
}

export default FooterSection