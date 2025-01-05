import { useContext } from 'react'
import styled from 'styled-components'
import { styles } from '../../../../constants'
import { ImageDataContext } from '../../../../context/ImageDataProvider'

const Button = styled.button`
  height: 3rem;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  background-color: white;
  color: black;
  border: 2px solid black;
  font-size: ${styles.font.paragraph.size};
  font-weight: ${styles.font.paragraph.weight};
  border-radius: 100px;
  cursor: pointer;
  flex-grow: 1;
`

const Shuffle = () => {
  const { setRandomImageKeys } = useContext(ImageDataContext)

  const shuffle = async () => {
    setRandomImageKeys()
  }

  return (
    <Button onClick={shuffle}>
      <img src={'./icons/shuffle.png'} alt="shuffle" height={'20px'}/>
      Shuffle
    </Button>
  )
}

export default Shuffle