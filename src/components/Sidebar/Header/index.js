import styled from 'styled-components'
import { styles } from '../../../constants'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  padding: ${styles.spacing.padding};
  border-bottom: ${styles.borders.strength} solid black;
`

const Header = () => {
  return (
    <HeaderContainer>
      FORMEN (OHNE) FUNKTION
    </HeaderContainer>
  )
}

export default Header