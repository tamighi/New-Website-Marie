import React from "react"

import LibCard from "../../../lib/components/card/Card"
import useColors from "../../../lib/hooks/hooks/useColors"

const Card = ({ children }: { children: React.ReactNode }) => {
  const colors = useColors()

  return (
    <LibCard
      style={{
        backgroundColor: colors.primaryColor,
        transition: "background 0.6s ease-in-out",
      }}
    >
      {children}
    </LibCard>
  )
}

export default Card
