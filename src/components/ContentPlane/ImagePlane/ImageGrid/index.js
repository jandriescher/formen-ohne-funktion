import styled from 'styled-components'

const ImageGridContainer = styled.div`
  display: grid;
  min-height: 300px;
  min-width: 300px;
  max-height: 500px;
  max-width: 500px;
  height: 100%;
  width: 100%;
  overflow: auto;
  grid-template-columns: [first] 50% [line2] 50% [end];
  grid-template-rows: [row1-start] 50% [row2-start] 50% [last-line];
  background-color: white;
`

const Tile = styled.img`
  width: 100%;
`

const ImageGrid = ({ imageKeys }) => {
  const imagePaths = {
    topLeft: `/images/gridFiles/topLeft/${imageKeys.topLeft}.png`,
    topRight: `/images/gridFiles/topRight/${imageKeys.topRight}.png`,
    bottomLeft: `/images/gridFiles/bottomLeft/${imageKeys.bottomLeft}.png`,
    bottomRight: `/images/gridFiles/bottomRight/${imageKeys.bottomRight}.png`
  }

  return (
    <ImageGridContainer>
      <Tile src={imagePaths.topLeft} alt="topLeft" />
      <Tile src={imagePaths.topRight} alt="topRight" />
      <Tile src={imagePaths.bottomLeft} alt="bottomLeft" />
      <Tile src={imagePaths.bottomRight} alt="bottomRight" />
    </ImageGridContainer>
  )
}

export default ImageGrid