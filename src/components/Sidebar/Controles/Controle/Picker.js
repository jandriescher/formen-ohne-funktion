import { useContext, useState } from 'react'
import styled from 'styled-components'
import { ImageDataContext } from '../../../../context/ImageDataProvider'

const PickerContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
`

const Value = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 1rem;
`

const Picker = ({ position }) => {
  const { imageKeys, setImageKeys } = useContext(ImageDataContext)

  const [key, setKey] = useState(imageKeys[position])
  const [value, setValue] = useState(parseInt(key))

  const updateImageKeys = (newKey) => {
    setKey(newKey)
    const newImageKeys = { ...imageKeys, [position]: `0${newKey}`}
    setImageKeys(newImageKeys)
  }

  const handleValueChange = (newValue) => {
    if (newValue >= 0 && newValue <= 9) {
      setValue(newValue)
      updateImageKeys(newValue)
    }
  }

  const isMaxValue = (value) => value === 4
  const isMinValue = (value) => value === 1

  return (
    <PickerContainer>
      <Button disabled={isMinValue(value)} onClick={() => handleValueChange(value - 1)}>-</Button>
      <Value>{value}</Value>
      <Button disabled={isMaxValue(value)} onClick={() => handleValueChange(value + 1)}>+</Button>
    </PickerContainer>
  )
}

export default Picker