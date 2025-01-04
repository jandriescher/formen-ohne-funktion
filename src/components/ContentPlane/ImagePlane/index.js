import { useContext } from 'react'
import styled from 'styled-components'
import { ImageDataContext } from '../../../context/ImageDataProvider'
import ImageGrid from './ImageGrid'

const ImagePlaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 80%;
`
const ImagePlane = () => {
  const { imageKeys } = useContext(ImageDataContext)

  return (
    <ImagePlaneContainer>
      <ImageGrid imageKeys={imageKeys} />
    </ImagePlaneContainer>
  )
}

export default ImagePlane