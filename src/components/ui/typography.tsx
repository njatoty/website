import React from "react"
import { cn } from "../../utils";

type TypographyProps = {
  children: React.ReactNode;
  className?: string
};

export const MutedTitle = ({ children, className }: TypographyProps) => {
  return (
    <h1 className={cn("my-3 text-lg uppercase text-c-gray", className)}>{children}</h1>
  )
}

export const StrongTitle = ({ children }: TypographyProps) => {
  return (
    <div className="max-w-fit">
      <h2 className="text-2xl font-bold lg:text-3xl text-c-dark2 dark:text-c-light">{children}</h2>
      <div className="w-1/3 h-1 my-4 bg-purple-500" />
    </div>
  )
}

export const Paragraph = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn("text-c-dark0 dark:text-c-gray", className)}>
      {children}
    </p>
  )
}

export const ListDisc = ({ children, className }: TypographyProps) => {
  return (
    <ul className={cn("text-c-dark0 dark:text-c-gray list-disc list-inside", className)}>
      {children}
    </ul>
  )
}

ListDisc.Item = ({ children, className }: TypographyProps) => {
  return (
    <li className={cn(className)}>
      {children}
    </li>
  )
}