import React, { createContext, useState } from "react"

export const ModalContext = createContext(false)

export const ModalContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <ModalContext.Provider value={[modalIsOpen, setModalIsOpen]}>
      {children}
    </ModalContext.Provider>
  )
}
