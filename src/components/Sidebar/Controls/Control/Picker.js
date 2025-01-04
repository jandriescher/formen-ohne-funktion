import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { styles } from '../../../../constants'
import { ImageDataContext } from '../../../../context/ImageDataProvider'
import { formatNumber } from '../../../../utils'

const PickerContainer = styled.div`
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.div` 
  width: 0px;
  height: 0px;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  ${({ type }) => type === 'add' ? 'border-left: 10px solid black;' : 'border-right: 10px solid black;'}
`

const Value = styled.p`
  font-size: ${styles.font.paragraph.size};
  font-weight: ${styles.font.paragraph.weight};
  margin: 0 3.5rem;
`

const Picker = ({ position }) => {
  const { imageKeys, setImageKeys } = useContext(ImageDataContext)

  const [value, setValue] = useState(parseInt(imageKeys[position]))

  const handleValueChange = (input) => {
    const newValue = input > 4 ? 1 : input < 1 ? 4 : input
    setValue(newValue)
    const newImageKeys = { ...imageKeys, [position]: newValue }
    setImageKeys(newImageKeys)
  }

  useEffect(() => {
    setValue(parseInt(imageKeys[position]))
  }, [imageKeys, position])
  
  return (
    <PickerContainer>
      <Button onClick={() => handleValueChange(value - 1)} type={'subtract'}/>
      <Value>{formatNumber(value)}</Value>
      <Button onClick={() => handleValueChange(value + 1)} type={'add'}/>
    </PickerContainer>
  )
}

export default Picker