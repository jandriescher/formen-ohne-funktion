import styled from 'styled-components'
import Picker from './Picker'
import { styles } from '../../../../constants'

const ControlContainer = styled.div`
  padding: ${styles.spacing.padding};
`

const Ttile = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
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