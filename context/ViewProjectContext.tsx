import React, { createContext, useContext, useState } from 'react'
import ProjectType from 'interfaces/project'

interface ViewProjectContextProps {
  projectTopMargin: number
  setProjectTopMargin: React.Dispatch<React.SetStateAction<number>>
  viewingProject: ProjectType | null
  setViewingProject: React.Dispatch<React.SetStateAction<ProjectType | null>>
}

const ViewProjectContext = createContext<ViewProjectContextProps>({} as ViewProjectContextProps)

interface ViewProjectContextProviderProps {
  children: React.ReactNode
}

const ViewProjectContextProvider: React.FC<ViewProjectContextProviderProps> = ({ children }) => {
  const [projectTopMargin, setProjectTopMargin] = useState<number>()

  const [viewingProject, setViewingProject] = useState<ProjectType | null>(null)
  return (
    <ViewProjectContext.Provider
      value={{
        projectTopMargin,
        setProjectTopMargin,
        viewingProject,
        setViewingProject,
      }}
    >
      {children}
    </ViewProjectContext.Provider>
  )
}

export const useViewProjectContext = () => useContext(ViewProjectContext)

export { ViewProjectContext, ViewProjectContextProvider }
