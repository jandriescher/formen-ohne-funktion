import styled from 'styled-components'
import Picker from './Picker'

const ControleContainer = styled.div`
`

const Ttile = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`

const Controle = ({ title, position }) => {
  return (
    <ControleContainer>
      <Ttile>{title}</Ttile>
      <Picker position={position} />
    </ControleContainer>
  )
}

export default Controle