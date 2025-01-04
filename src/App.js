import { useState } from 'react'
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
  const availableImageKeys = ['1', '2', '3', '4']
  const initialRandomKeyMap = {
    topLeft: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)],
    topRight: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)],
    bottomLeft: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)],
    bottomRight: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)]
  }

  const [imageKeys, setImageKeys] = useState(initialRandomKeyMap)

  return (
    <AppContainer>
      <Sidebar />
      <ContentPlane imageKeys={imageKeys} />
    </AppContainer> 
  )
}

export default App
