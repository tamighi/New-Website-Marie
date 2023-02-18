import React from "react"

import { ResponsiveGrid as Grid } from "lib"
import { AnimatedPage } from "../../utils/AnimatedPage"

import "../../../styles/Page.css"

export const BasePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="Page">
      <AnimatedPage>
        <Grid container>
          <Grid large={3} />
          <Grid small={12} large={6}>
            {children}
          </Grid>
          <Grid large={3} />
        </Grid>
      </AnimatedPage>
    </div>
  )
}
