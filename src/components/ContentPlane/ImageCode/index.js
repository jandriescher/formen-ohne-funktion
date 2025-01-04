import { useContext } from 'react'
import styled from 'styled-components'
import { ImageDataContext } from '../../../context/ImageDataProvider'

const ImageCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 20%;
  font-size: 2rem;
  font-weight: bold;
`
const ImageCode = () => {
  const { imageCode } = useContext(ImageDataContext)

  return (
    <ImageCodeContainer>
      {imageCode}
    </ImageCodeContainer>
  )
}

export default ImageCode