import React from "react"
import { useLocation } from "react-router-dom"

export const AnimatePage = ({ children }: { children: React.ReactNode }) => {
  const [currentChildren, setCurrentChildren] = React.useState(children)
  const location = useLocation()

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentChildren(children)
    }, 1000)
    return () => clearTimeout(timer)
  }, [children])

  return <>{currentChildren}</>
}
