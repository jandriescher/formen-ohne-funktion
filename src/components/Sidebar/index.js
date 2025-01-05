import styled from 'styled-components'
import Controls from './Controls'
import Header from './Header'
import Description from './Description'
import Search from './Search'
import Download from './Download'
import { styles } from '../../constants'

const SideBarContainer = styled.div`
  background-color: white;
  border-right: ${styles.borders.strength} solid black;
`

const Sidebar = () => {
  return (
    <SideBarContainer>
      <Header />
      <Description />
      <Controls />
      <Search />
      <Download />
    </SideBarContainer>
  )
}

export default Sidebar