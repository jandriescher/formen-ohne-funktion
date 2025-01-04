import styled from 'styled-components'
import ContentPlane from './components/ContentPlane'
import Sidebar from './components/Sidebar'
import { ImageDataProvider } from './context/ImageDataProvider'

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: [first] 380px [line2] auto [end];
  grid-template-rows: [row1-start] 100% [last-line];
`

const App = () => {
  return (
    <ImageDataProvider>
      <AppContainer>
        <Sidebar />
        <ContentPlane/>
      </AppContainer>
    </ImageDataProvider>
  )
}

export default App
