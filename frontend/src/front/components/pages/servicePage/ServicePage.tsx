import "../../../styles/Page.css"
import Card from "../../custom/Card"
import Grid from "../../custom/Grid"

export const ServicePage = () => {
  return (
    <div className="Page">
    <Grid small={3} large={3} />
      <Grid small={12} large={6}>
        <Card>Services</Card>
      </Grid>
    <Grid small={3} large={3} />
    </div>
  )
}
