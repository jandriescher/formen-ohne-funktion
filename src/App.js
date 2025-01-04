import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ContentPlane from './components/ContentPlane'
import Sidebar from './components/Sidebar'

const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: [first] 400px [line2] auto [end];
  grid-template-rows: [row1-start] 100% [last-line];
`

const App = () => {
  const availableImageKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  const fourInitialRandomKeys = availableImageKeys.sort(() => 0.5 - Math.random()).slice(0, 4)
  const [imagePaths, setImagePaths] = useState(fourInitialRandomKeys)

  return (
    <AppContainer>
      <Sidebar />
      <ContentPlane imagePaths={imagePaths} />
    </AppContainer> 
  )
}

export default App
