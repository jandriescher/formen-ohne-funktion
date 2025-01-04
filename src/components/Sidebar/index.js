import styled from 'styled-components'

const SideBarContainer = styled.div`
  background-color: white;
  border-top: 5px solid black;
  border-left: 5px solid black;
  border-right: 2.5px solid black;
  border-bottom: 5px solid black;
`

const Sidebar = () => {
  return (
    <SideBarContainer>
      Sidebar
    </SideBarContainer>
  )
}

export default Sidebar