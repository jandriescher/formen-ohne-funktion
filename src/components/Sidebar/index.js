import styled from 'styled-components'
import Header from './Header'

const SideBarContainer = styled.div`
  background-color: white;
  border-top: 5px solid black;
  border-left: 5px solid black;
  border-right: 2.5px solid black;
  border-bottom: 5px solid black;
  display: grid;
  grid-template-columns: [first] auto [end];
  grid-template-rows: [row1-start] 64px [row2-start] 238px [row3-start] 109px [last-line];
`

const Sidebar = () => {
  return (
    <SideBarContainer>
      <Header />
    </SideBarContainer>
  )
}

export default Sidebar