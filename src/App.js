import styled from 'styled-components'
import ContentPlane from './components/ContentPlane'
import Sidebar from './components/Sidebar'
import { ImageDataProvider } from './context/ImageDataProvider'

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 410px auto;
  grid-template-rows: auto;
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
