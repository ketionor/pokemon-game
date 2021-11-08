import React from "react"
import { useState, useEffect, useCallback, useContext } from "react"
import getRandom from "../helpers/get-random"
import { GameContext } from "../store/game-context"
import * as styles from "../styles/counting-game.module.css"

const classes = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
}

const CountingGame = () => {
  const [game, setGame] = useContext(GameContext)

  const [pokemon, setPokemon] = useState({})
  const [pokeArr, setPokeArr] = useState([])
  const [numberClass, setNumberClass] = useState("")
  const [number, setNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const gameStart = useCallback(async () => {
    setIsLoading(true)

    //Get a random pokemon
    const pokemon = await fetchPokemon()
    setPokemon(pokemon)

    //Get a random number
    const num = getRandom(game.countingGame.min, game.countingGame.max)
    setNumber(num)
    setNumberClass(classes[num])

    console.log(numberClass)

    //Create array of JSX elements
    let pokeArr = []
    for (let i = 0; i < num; i++) {
      let imgStyle = `img__${i + 1}`
      pokeArr.push(
        <img
          //   className={`${styles.imgStyle}`}
          src={pokemon.sprite}
          alt={pokemon.name}
          key={i}
        />
      )
    }
    setPokeArr(pokeArr)

    setIsLoading(false)
  })

  //get a random pokemon
  const fetchPokemon = useCallback(async () => {
    const num = getRandom(1, game.global.pokeSet)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    const data = await response.json()
    const pokemon = {
      name: data.name,
      sprite: data.sprites.other.dream_world.front_default,
    }
    return pokemon
  }, [game])

  const handleNext = () => {
    gameStart()
  }

  //   const handleNextKeypress = () => {
  //     handleNext()
  //   }

  //   useEffect(() => {
  //     window.addEventListener("keydown", handleNextKeypress)
  //     gameStart()

  //     return () => {
  //       window.removeEventListener("keydown", handleNext)
  //     }
  //   }, [])

  return (
    <div>
      <div className={styles.container}>
        {isLoading && (
          <div className={styles.pokeball__wrapper}>
            <div className={styles.pokeball}></div>
          </div>
        )}
        {!isLoading && (
          <>
            <h2 className={styles.pokemonName}>{pokemon.name}</h2>
            {/* <div className={styles.number}>{number}</div> */}
            <div
              className={`${styles.imageContainer} ${styles[numberClass]} ${styles.grid}`}
            >
              {pokeArr}
            </div>
          </>
        )}
      </div>

      <button onClick={handleNext} className={styles.next__button}>
        Next
      </button>
    </div>
  )
}

export default CountingGame
