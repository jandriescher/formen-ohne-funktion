import styled from 'styled-components'
import { styles } from '../../../constants'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${styles.font.heading.size};
  font-weight: ${styles.font.heading.weight};
  padding: ${styles.spacing.padding};
  border-bottom: ${styles.borders.strength} solid black;
`

const Header = () => {
  return (
    <HeaderContainer>
      FORM(EN) OHNE FUNKTION
    </HeaderContainer>
  )
}

export default Header