import styled from 'styled-components'
import ImageCode from './ImageCode'
import ImagePlane from './ImagePlane'

const ContentPlaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top: 5px solid black;
  border-left: 2.5px solid black;
  border-right: 5px solid black;
  border-bottom: 5px solid black;
`
const ContentPlane = ({ imageKeys }) => {
  return (
    <ContentPlaneContainer>
      <ImagePlane imageKeys={imageKeys} />
      <ImageCode />
    </ContentPlaneContainer>
  )
}

export default ContentPlane