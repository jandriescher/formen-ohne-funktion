import styled from 'styled-components'
import ImageGrid from './ImageGrid'

const ImagePlaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-bottom: 2.5px solid black;
  height: 80%;
`
const ImagePlane = ({ imageKeys }) => {
  return (
    <ImagePlaneContainer>
      <ImageGrid imageKeys={imageKeys} />
    </ImagePlaneContainer>
  )
}

export default ImagePlane