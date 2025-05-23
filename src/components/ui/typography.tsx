import React from "react"
import { cn } from "../../utils";
import { FaCheck, FaTimes } from "react-icons/fa";

type TypographyProps = {
  children?: React.ReactNode;
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
      <div className="w-1/3 h-1 my-4 bg-violet-500" />
    </div>
  )
}

export const HeadingTitle = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={cn("text-3xl font-bold lg:text-4xl text-c-dark2 dark:text-c-light w-fit", className)}>{children}</h2>
  )
}

export const HeadingTitle1 = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={cn("text-2xl font-bold lg:text-3xl text-c-dark2 dark:text-c-light w-fit", className)}>{children}</h2>
  )
}

export const HeadingTitle2 = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={cn("text-xl font-bold lg:text-2xl text-c-dark2 dark:text-c-light w-fit", className)}>{children}</h2>
  )
}

export const HeadingTitle3 = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={cn("text-base font-bold lg:text-lg text-c-dark2 dark:text-c-light w-fit", className)}>{children}</h2>
  )
}

export const HeadingTitle4 = ({ children, className }: TypographyProps) => {
  return (
    <h2 className={cn("text-sm font-bold lg:text-base text-c-dark2 dark:text-c-light w-fit", className)}>{children}</h2>
  )
}

export const Specify = ({ children, className }: TypographyProps) => {
  return (
    <span className={cn("underline underline-offset-2", className)}>{children}</span>
  )
}

export const Solution = ({ children, className }: TypographyProps) => {
  return (
    <span className={cn("text-green-500 uppercase", className)}>{children}</span>
  )
}

export const Problem = ({ children, className }: TypographyProps) => {
  return (
    <span className={cn("text-red-500 uppercase", className)}>{children}</span>
  )
}

export const Paragraph = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn("text-c-dark0 dark:text-c-gray", className)}>
      {children}
    </p>
  )
}

export const CorrectParagraph = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn("text-c-dark0 dark:text-c-gray my-1", className)}>
      <FaCheck className="inline mr-2 text-green-500" size={16} />
      {children}
    </p>
  )
}

export const IncorrectParagraph = ({ children, className }: TypographyProps) => {
  return (
    <p className={cn("text-c-dark0 dark:text-c-gray my-1", className)}>
      <FaTimes className="inline mr-2 text-rose-500" size={16} />
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