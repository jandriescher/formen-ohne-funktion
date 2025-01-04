import styled from 'styled-components'
import Controls from './Controls'
import Header from './Header'
import Description from './Description'
import Search from './Search'
import Download from './Download'

const SideBarContainer = styled.div`
  background-color: white;
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