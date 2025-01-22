const generateAvailableImageKeys = (maxValue) => {
  return Array.from({ length: maxValue }, (_, i) => i + 1);
}

const availableImageKeys = generateAvailableImageKeys(50)

const styles = {
  borders: {
    strength:  '2px'
  },
  font: {
    heading: {
      size: '1.2rem',
      weight: 'bold'
    },
    paragraph: {
      size: '1.17rem',
      weight: 'bold'
    }
  },
  spacing: {
    padding: '1.2rem'
  }
}

export {
  availableImageKeys,
  styles
}