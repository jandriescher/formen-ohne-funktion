import html2canvas from 'html2canvas'
import { useContext } from 'react'
import styled from 'styled-components'
import { styles } from '../../../constants'
import { ImageDataContext } from '../../../context/ImageDataProvider'


const DownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${styles.spacing.padding};
`

const Button = styled.button`
  height: 3rem;
  background-color: black;
  color: white;
  font-size: ${styles.font.paragraph.size};
  font-weight: ${styles.font.paragraph.weight};
  border: none;
  border-radius: 100px;
  cursor: pointer;
`

const Download = () => {
  const { imageCode } = useContext(ImageDataContext)

  const handleDownload = async () => {
    const gridElement = document.getElementById('image-grid')
    if (!gridElement) return;

    const canvas = await html2canvas(gridElement)

    const link = document.createElement('a')
    link.download = `${imageCode}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }

  return (
    <DownloadContainer>
      <Button onClick={handleDownload}>Download</Button>
    </DownloadContainer>
  )
}

export default Download