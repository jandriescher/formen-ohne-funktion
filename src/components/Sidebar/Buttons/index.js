import styled from 'styled-components'
import Download from './Download'
import Shuffle from './Shuffle'
import { styles } from '../../../constants'


const ButtonsContainer = styled.div`
  display: flex;
  gap: 13px;
  padding: ${styles.spacing.padding};
`

const Buttons = () => {
  return (
    <ButtonsContainer>
      <Shuffle />
      <Download />
    </ButtonsContainer>
  )
}

export default Buttons