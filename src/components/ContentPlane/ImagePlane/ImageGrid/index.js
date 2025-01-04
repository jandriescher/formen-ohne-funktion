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
  background-color: yellow;
`
const ImageGrid = ({ imagePaths }) => {
  return (
    <ImageGridContainer>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </ImageGridContainer>
  )
}

export default ImageGrid