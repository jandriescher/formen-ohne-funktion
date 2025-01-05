import styled from 'styled-components'
import { styles } from '../../constants'
import Buttons from './Buttons'
import Controls from './Controls'
import Description from './Description'
import Header from './Header'
import Search from './Search'

const SideBarContainer = styled.div`
  background-color: white;
  border-right: ${styles.borders.strength} solid black;
  display: grid;
  grid-template-rows: 64px min-content min-content min-content min-content;
  height: 100vh;
`

const Sidebar = () => {
  return (
    <SideBarContainer>
      <Header />
      <Description />
      <Controls />
      <Search />
      <Buttons />
    </SideBarContainer>
  )
}

export default Sidebar