import styled from 'styled-components'
import { styles } from '../../../constants'

const DescriptionContainer = styled.div`
  font-size: ${styles.font.size};
  font-weight: ${styles.font.weight};
  padding: ${styles.spacing.padding};
  border-bottom: ${styles.borders.strength} solid black;
`

const Description = () => {
  return (
    <DescriptionContainer>
      Dieser Formgenerator ist die digitale Umsetzung des Bachelorprojekts von Jannik Zernke, in welchem er 6,25 Millionen Formkombinationen in einem Buch zusammengefasst hat. Das Projekt soll bewusst die Funktionalität zugunsten der Form hintenanstellen. Die 6,25 Millionen Formkombinationen lassen sich hier auch finden, downloaden und weiterverarbeiten.
    </DescriptionContainer>
  )
}

export default Description