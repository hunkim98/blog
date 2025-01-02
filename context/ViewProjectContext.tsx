import React, { createContext, useContext, useEffect, useState } from 'react'
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
  filterCategory: string
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>
  // isApplyingFilter: boolean
  // setIsApplyingFilter: React.Dispatch<React.SetStateAction<boolean>>
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
  const [filterCategory, setFilterCategory] = useState<string | null>(null)
  // const [isApplyingFilter, setIsApplyingFilter] = useState(false)
  const [viewingProject, setViewingProject] = useState<ProjectType | null>(null)
  useEffect(() => {
    // add key listener to erase the filter
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setFilterCategory(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <HomeViewContentContext.Provider
      value={{
        filterCategory,
        setFilterCategory,
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
