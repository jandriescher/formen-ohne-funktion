import styled from 'styled-components'
import ImageGrid from './ImageGrid'

const ImagePlaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
  height: 80%;
`
const ImagePlane = ({ imagePaths }) => {
  console.log("🚀 ~ ImagePlane ~ imagePaths:", imagePaths)
  return (
    <ImagePlaneContainer>
      <ImageGrid />
    </ImagePlaneContainer>
  )
}

export default ImagePlane