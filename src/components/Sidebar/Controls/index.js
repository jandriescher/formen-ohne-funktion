import styled from 'styled-components'
import { styles } from '../../../constants'
import Control from './Control'

const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: [first] 50% [second] 50% [end];
  grid-template-rows: [row1-start] 50% [row2-start] 50% [last-line];
  border-bottom: ${styles.borders.strength} solid black;
  > :nth-child(2n) {
    border-left: ${styles.borders.strength} solid black;
  }
  > :nth-child(-n+2) {
    border-bottom: ${styles.borders.strength} solid black;
  }
`

const Controls = () => {
  return (
    <ControlsContainer>
      <Control title={'Oben Links'} position={'topLeft'}/>
      <Control title={'Oben Rechts'} position={'topRight'} />
      <Control title={'Unten Links'} position={'bottomLeft'} />
      <Control title={'Unten Rechts'} position={'bottomRight'} />
    </ControlsContainer>
  )
}

export default Controls