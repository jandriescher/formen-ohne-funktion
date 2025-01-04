import styled from 'styled-components'
import Controls from './Controls'
import Header from './Header'
import Description from './Description'
import Search from './Search'

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
    </SideBarContainer>
  )
}

export default Sidebar