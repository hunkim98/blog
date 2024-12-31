import React, { createContext, useContext, useState } from 'react'
import ProjectType from 'interfaces/project'

interface HomeViewContentContextProps {
  projectTopMargin: number
  setProjectTopMargin: React.Dispatch<React.SetStateAction<number>>
  projectContentHeight: number
  setProjectContentHeight: React.Dispatch<React.SetStateAction<number>>
  postContentHeight: number
  setPostContentHeight: React.Dispatch<React.SetStateAction<number>>
  viewingProject: ProjectType | null
  setViewingProject: React.Dispatch<React.SetStateAction<ProjectType | null>>
}

const HomeViewContentContext = createContext<HomeViewContentContextProps>(
  {} as HomeViewContentContextProps
)

interface ViewProjectContextProviderProps {
  children: React.ReactNode
}

const HomeViewContentContextProvider: React.FC<ViewProjectContextProviderProps> = ({
  children,
}) => {
  const [projectTopMargin, setProjectTopMargin] = useState<number>()
  const [projectContentHeight, setProjectContentHeight] = useState<number>()
  const [postContentHeight, setPostContentHeight] = useState<number>()

  const [viewingProject, setViewingProject] = useState<ProjectType | null>(null)
  return (
    <HomeViewContentContext.Provider
      value={{
        projectTopMargin,
        setProjectTopMargin,
        projectContentHeight,
        setProjectContentHeight,
        postContentHeight,
        setPostContentHeight,
        viewingProject,
        setViewingProject,
      }}
    >
      {children}
    </HomeViewContentContext.Provider>
  )
}

export const useHomeViewContentContext = () => useContext(HomeViewContentContext)

export { HomeViewContentContext, HomeViewContentContextProvider }
