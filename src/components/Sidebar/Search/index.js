import { useContext, useState } from 'react'
import styled from 'styled-components'
import { ImageDataContext } from '../../../context/ImageDataProvider'
import { availableImageKeys, styles } from '../../../constants'

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: ${styles.font.heading.size};
  font-weight: ${styles.font.heading.weight};
  padding: ${styles.spacing.padding};
  border-bottom: ${styles.borders.strength} solid black;
`

const SearchInput = styled.input`
  all: unset;
  border: ${styles.borders.strength} solid black;
  height: 2rem;
  padding-left: 0.5rem;
  font-size: ${styles.font.paragraph.size};
  font-weight: ${styles.font.paragraph.weight};
  margin-top: 0.5rem;
  &:focus {
    border: ${styles.borders.strength} solid #2189FF;
  }
  ${({ hasError }) => hasError && `color: red;`
}
`

const Search = () => {
  const { setImageKeys } = useContext(ImageDataContext)
  const [hasError, setHasError] = useState(false)

  const validateInput = (input) => {
    const hasValidLength = input.length === 11
    const hasValidFormat = input.match(/^[0-9]{2}\.[0-9]{2}\.[0-9]{2}\.[0-9]{2}$/)
    const containsDoubleZero = input.includes('00')
    const isWithinRange = input.split('.').every((value) => availableImageKeys.includes(parseInt(value)))
    const isValid = hasValidLength && hasValidFormat && !containsDoubleZero && isWithinRange
    setHasError(!isValid)
    if (input.length === 0) setHasError(false)
    return isValid
  }

  const handleInputChange = (event) => {
    if (validateInput(event.target.value)) {
      const newImageKeys = event.target.value.split('.').map((value) => parseInt(value))
      setImageKeys({
        topLeft: newImageKeys[0],
        topRight: newImageKeys[1],
        bottomLeft: newImageKeys[2],
        bottomRight: newImageKeys[3]
      })
    }
  }

  return (
    <SearchContainer>
      <div>Form suchen</div>
      <SearchInput type={'text'} placeholder={'z.B. 01.02.03.04'} onChange={handleInputChange} hasError={hasError}></SearchInput>
    </SearchContainer>
  )
}

export default Search