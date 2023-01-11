import React from "react"
import { useLocation } from "react-router-dom"

import "../../styles/AnimatePage.css"

export const AnimatePage = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const [currentChildren, setCurrentChildren] = React.useState(children)
  const [previousLocation, setPreviousLocation] = React.useState(
    location.pathname
  )
  const [leave, setLeave] = React.useState(true)

  React.useEffect(() => {
    if (previousLocation !== location.pathname) {
      setLeave(true)
      setPreviousLocation(location.pathname)
    }
    const timer = setTimeout(() => {
      setCurrentChildren(children)
      setLeave(false)
    }, 600)
    return () => clearTimeout(timer)
  }, [children, previousLocation, location])

  return (
    <div className={`AnimatePage ${leave ? "onLeave" : ""}`}>
      {currentChildren}
    </div>
  )
}
