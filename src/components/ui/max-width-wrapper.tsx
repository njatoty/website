import React from 'react'
import { cn } from '../../utils';

interface MaxWidthWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const MaxWidthWrapper = ({
  className,
  children
}: MaxWidthWrapperProps) => {
  return (
    <div className={cn('w-full max-w-7xl', className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper