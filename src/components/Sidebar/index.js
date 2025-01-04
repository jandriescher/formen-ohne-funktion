import styled from 'styled-components'
import Controles from './Controles'
import Header from './Header'

const SideBarContainer = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: [first] auto [end];
  grid-template-rows: [row1-start] 64px [row2-start] 238px [row3-start] 109px [last-line];
`

const Sidebar = () => {
  return (
    <SideBarContainer>
      <Header />
      <Controles />
    </SideBarContainer>
  )
}

export default Sidebar