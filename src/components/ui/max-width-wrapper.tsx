import React from 'react'
import { cn } from '../../utils';

interface MaxWidthWrapperProps {
  className?: string;
  children?: React.ReactNode;
}

const MaxWidthWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & MaxWidthWrapperProps>(({
  className,
  children,
  ...props
}, ref) => {
  return (
    <div ref={ref} {...props} className={cn('w-full max-w-7xl', className)}>
      {children}
    </div>
  )
})

export default MaxWidthWrapper