import React from "react"

export const MutedTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="my-3 text-lg uppercase text-c-gray">{children}</h1>
  )
}

export const StrongTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-fit">
      <h2 className="text-2xl font-bold lg:text-3xl text-c-light">{children}</h2>
      <div className="w-1/3 h-1 my-4 bg-purple-500" />
    </div>
  )
}
