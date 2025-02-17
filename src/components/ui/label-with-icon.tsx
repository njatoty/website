import { cn } from '@/utils';
import React, { PropsWithChildren } from 'react'
import { FaArchive, FaCalendar, FaClock } from 'react-icons/fa';

type Props = {
    className?: string
} & PropsWithChildren;

// HOC
function withIconLabel(iconComponent: React.ReactElement) {
    return ({ children, className }: Props) => {
        return (
            <div className={cn("flex items-center gap-2", className)}>
                {iconComponent}
                {children}
            </div>
        )
    }
}

// Date
export const WithDateLabel = withIconLabel(<FaCalendar size={16} />);
// Archive
export const WithArchiveLabel = withIconLabel(<FaArchive size={16} />);
// ArchClockive
export const WithClockLabel = withIconLabel(<FaClock size={16} />);

