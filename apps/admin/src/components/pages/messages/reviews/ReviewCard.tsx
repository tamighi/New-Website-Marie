import { Header } from 'components/pages/core'
import { MessageCard } from '../common/MessageCard'
import { ReviewList } from './ReviewList'

export const ReviewCard = () => {
  return (
    <MessageCard resource={"reviews"}>
      <Header>
        <h3>Avis</h3>
      </Header>
      <ReviewList />
    </MessageCard>
  )
}
