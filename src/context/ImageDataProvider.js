import React, { createContext, useEffect, useState } from 'react'
import { availableImageKeys } from '../constants'

const ImageDataContext = createContext()

const ImageDataProvider = ({ children }) => {
  const generateRandomImageKeys = () => ({
    topLeft: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)],
    topRight: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)],
    bottomLeft: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)],
    bottomRight: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)]
  })

  const computeImageCode = (imageKeys) => {
    return `${imageKeys.topLeft}.${imageKeys.topRight}.${imageKeys.bottomLeft}.${imageKeys.bottomRight}`
  }

  const setRandomImageKeys = () => {
    setImageKeys(generateRandomImageKeys())
  }

  const [imageKeys, setImageKeys] = useState(generateRandomImageKeys())
  const [imageCode, setImageCode] = useState(computeImageCode(imageKeys))

  useEffect(() => {
    setImageCode(computeImageCode(imageKeys))
  }, [imageKeys])

  return (
    <ImageDataContext.Provider value={{ imageCode, imageKeys, setImageKeys, setRandomImageKeys }}>
      {children}
    </ImageDataContext.Provider>
  )
}

export { ImageDataContext, ImageDataProvider }