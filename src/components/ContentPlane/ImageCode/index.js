import { useContext } from 'react'
import styled from 'styled-components'
import { styles } from '../../../constants'
import { ImageDataContext } from '../../../context/ImageDataProvider'

const ImageCodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 2.5rem;
  font-weight: ${styles.font.heading.weight};
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