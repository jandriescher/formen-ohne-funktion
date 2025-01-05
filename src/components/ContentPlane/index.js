import styled from 'styled-components'
import ImageCode from './ImageCode'
import ImagePlane from './ImagePlane'

const ContentPlaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`
const ContentPlane = ({ imageKeys }) => {
  return (
    <ContentPlaneContainer>
      <ImagePlane />
      <ImageCode />
    </ContentPlaneContainer>
  )
}

export default ContentPlane