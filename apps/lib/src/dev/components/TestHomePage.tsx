import { Card, ResponsiveGrid, Paper } from "../../components"

import "../styles/Page.css"

export const TestHomePage = () => {
  return (
    <div className="Page">
      <ResponsiveGrid container style={{ gap: "16px", padding: "32px" }}>
        <ResponsiveGrid large={6}>
          <Card>
            I'm a Card !<br />
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </Card>
        </ResponsiveGrid>
        <ResponsiveGrid large={6}>
          <Paper>
            I'm a Paper ! <br />
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.r
          </Paper>
        </ResponsiveGrid>
      </ResponsiveGrid>
    </div>
  )
}
