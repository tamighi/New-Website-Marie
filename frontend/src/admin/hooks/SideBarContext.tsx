import React from "react"

const SideBarOpenContext = React.createContext<boolean | null>(null)
const SideBarToggleContext = React.createContext<(() => void) | null>(null)

export const useOpenSideBar = () => {
  return React.useContext(SideBarOpenContext)
}

export const useToggleSideBar = () => {
  return React.useContext(SideBarToggleContext)
}

export const SideBarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [open, setOpen] = React.useState(false)

  const toggleOpen = () => {
    setOpen(!open)
  }
  return (
    <SideBarOpenContext.Provider value={open}>
      <SideBarToggleContext.Provider value={toggleOpen}>
        {children}
      </SideBarToggleContext.Provider>
    </SideBarOpenContext.Provider>
  )
}
