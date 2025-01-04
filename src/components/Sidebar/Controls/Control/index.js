import styled from 'styled-components'
import Picker from './Picker'

const ControlContainer = styled.div`
`

const Ttile = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`

const Control = ({ title, position }) => {
  return (
    <ControlContainer>
      <Ttile>{title}</Ttile>
      <Picker position={position} />
    </ControlContainer>
  )
}

export default Control