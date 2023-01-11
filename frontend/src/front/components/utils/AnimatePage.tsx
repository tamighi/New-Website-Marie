import React from "react"

export const AnimatePage = ({ children }: { children: React.ReactNode }) => {
  const [currentChildren, setCurrentChildren] = React.useState(children)
  const [opacity, setOpacity] = React.useState(0)

  React.useEffect(() => {
    setOpacity(0)
    const timer = setTimeout(() => {
      setCurrentChildren(children)
      setOpacity(1)
    }, 600)
    return () => clearTimeout(timer)
  }, [children])

  return (
    <div style={{ opacity: opacity, transition: "opacity 0.6s ease-in-out" }}>
      {currentChildren}
    </div>
  )
}
