import styled from 'styled-components'
import Controle from './Controle'

const ControlesContainer = styled.div`
  display: grid;
  grid-template-columns: [first] 50% [second] 50% [end];
  grid-template-rows: [row1-start] 50% [row2-start] 50% [last-line];
  border-bottom: 5px solid black;
  > :nth-child(2n) {
    border-left: 5px solid black;
  }
  > :nth-child(-n+2) {
    border-bottom: 5px solid black;
  }
`

const Controles = () => {
  return (
    <ControlesContainer>
      <Controle title={'Oben Links'} position={'topLeft'}/>
      <Controle title={'Oben Rechts'} position={'topRight'} />
      <Controle title={'Unten Links'} position={'bottomLeft'} />
      <Controle title={'Unten Rechts'} position={'bottomRight'} />
    </ControlesContainer>
  )
}

export default Controles