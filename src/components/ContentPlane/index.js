import styled from 'styled-components'
import ImageCode from './ImageCode'
import ImagePlane from './ImagePlane'

const ContentPlaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
`
const ContentPlane = ({ imagePaths }) => {
  return (
    <ContentPlaneContainer>
      <ImagePlane imagePaths={imagePaths} />
      <ImageCode />
    </ContentPlaneContainer>
  )
}

export default ContentPlane