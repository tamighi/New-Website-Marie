import React from "react"
import { useColors } from "../../hooks/useColors"

import "../../styles/Card.css"

interface CardProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Card = ({ children, style = {} }: CardProps) => {
  const colors = useColors()
  return (
    <div
      className="Card"
      style={{ backgroundColor: colors.primaryColor, ...style }}
    >
      {children}
    </div>
  )
}

export default Card
