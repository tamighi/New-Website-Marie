import React from "react"

import LibCard from "../../../lib/components/card/Card"

const Card = ({ children }: { children: React.ReactNode }) => {

  return (
    <LibCard
      style={{
        transition: "background 0.6s ease-in-out",
      }}
    >
      {children}
    </LibCard>
  )
}

export default Card
