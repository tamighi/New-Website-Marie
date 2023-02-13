import { BasePage } from "../../generics/basePage/BasePage"
import { Card } from "lib"

import "../../../styles/Page.css"
import "../../../styles/Typography.css"

export const ServicePage = () => {
  return (
    <BasePage>
      <Card>
        <div className="Title">Les services proposés ...</div>
      </Card>
    </BasePage>
  )
}
