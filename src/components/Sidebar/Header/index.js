import styled from 'styled-components'
import { styles } from '../../../constants'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  border-bottom: ${styles.borders.strength} solid black;
`

const Header = () => {
  return (
    <HeaderContainer>
      <p>FORMEN (OHNE) FUNKTION</p>
    </HeaderContainer>
  )
}

export default Header