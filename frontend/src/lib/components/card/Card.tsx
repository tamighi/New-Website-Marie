import React from "react"
import "./Card.css"

interface CardProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

const Card = ({ children, style = {} }: CardProps) => {
  return (
    <div className="Card" style={style}>
      {children}
    </div>
  )
}

export default Card
