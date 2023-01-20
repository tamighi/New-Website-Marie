import React from "react"

import LibCard from "../../../lib/components/card/Card"

const Card = ({ children }: { children: React.ReactNode }) => {

  return (
    <LibCard
      style={{
      }}
    >
      {children}
    </LibCard>
  )
}

export default Card
