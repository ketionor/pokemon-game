import React, { createContext, useState } from "react"

export const GameContext = createContext({ min: 1, max: 10 })

export const GameContextProvider = ({ children }) => {
  const [game, setGame] = useState({
    global: { pokeSet: 151 },
    countingGame: { min: 1, max: 10 },
  })

  return (
    <GameContext.Provider value={[game, setGame]}>
      {children}
    </GameContext.Provider>
  )
}
