import { BasePage } from "../../generics/basePage/BasePage"
import Card from "../../../../lib/components/card/Card"

import useColors from "../../../hooks/useColors"

import "../../../styles/Page.css"
import "../../../styles/Typography.css"

export const ServicePage = () => {
  const colors = useColors()
  return (
    <BasePage>
      <Card style={{ backgroundColor: colors.primaryColor }}>
        <div className="Title">Les services proposés ...</div>
      </Card>
    </BasePage>
  )
}
