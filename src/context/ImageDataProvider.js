import React, { createContext, useState } from 'react'

const ImageDataContext = createContext()

const ImageDataProvider = ({ children }) => {
  const availableImageKeys = ['1', '2', '3', '4']
  const initialRandomKeyMap = {
    topLeft: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)],
    topRight: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)],
    bottomLeft: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)],
    bottomRight: availableImageKeys[Math.floor(Math.random() * availableImageKeys.length)]
  }

  const [imageKeys, setImageKeys] = useState(initialRandomKeyMap)

  return (
    <ImageDataContext.Provider value={{ imageKeys, setImageKeys }}>
      {children}
    </ImageDataContext.Provider>
  )
}

export { ImageDataContext, ImageDataProvider }