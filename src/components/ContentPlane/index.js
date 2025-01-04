import styled from 'styled-components'
import ImageCode from './ImageCode'
import ImagePlane from './ImagePlane'
import { styles } from '../../constants'

const ContentPlaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-left: ${styles.borders.strength} solid black;
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