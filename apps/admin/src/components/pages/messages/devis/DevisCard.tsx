import { Header } from 'components/pages/core'
import { MessageCard } from '../common/MessageCard'
import { DevisList } from './DevisList'

export const DevisCard = () => {
  return (
    <MessageCard resource={"devis"}>
      <Header>
        <h3>Demande de devis</h3>
      </Header>
      <DevisList />
    </MessageCard>
  )
}
