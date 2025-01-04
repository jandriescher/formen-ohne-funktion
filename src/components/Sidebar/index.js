import styled from 'styled-components'
import Controls from './Controls'
import Header from './Header'
import Description from './Description'

const SideBarContainer = styled.div`
  background-color: white;
`

const Sidebar = () => {
  return (
    <SideBarContainer>
      <Header />
      <Description />
      <Controls />
    </SideBarContainer>
  )
}

export default Sidebar