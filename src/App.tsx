
import HangmanDraw from "./components/HangmanDraw"
import HangmanWord from "./components/HangmanWord"
import Keyboard from "./components/Keyboard"
import word from "../wordList.json"
import { useEffect, useState } from "react"

function App() {
  const [currentWord, setcurrentword] = useState(() => {
    return word[Math.floor(Math.random() * word.length)]
  })

  const [selectedLetter, setselectedLetter] = useState<string[]>([])

  const incorrectLetter = selectedLetter.filter((letter) => {
    return !currentWord.includes(letter)
  })

  const isLoser = incorrectLetter.length >= 6

  const isWinner = currentWord
    .split("")
    .every((letter) => selectedLetter.includes(letter))

  const isGameOver = isLoser || isWinner

  const addLatter = (letter: string) => {
    if (selectedLetter.includes(letter) || isGameOver) return
    setselectedLetter((prev) => [...prev, letter])
  }

  useEffect(() => {
    const onKeyboardPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()

      if (!/^[a-z]$/.test(key)) return

      addLatter(key)
    }

    window.addEventListener("keydown", onKeyboardPress)

    return () => {
      window.removeEventListener("keydown", onKeyboardPress)
    }
  }, [selectedLetter, isGameOver])

  return (
    <div className="flex flex-col items-center gap-10">
      <div>
        {isLoser
          ? "Nice try, refresh and try again!"
          : isWinner
            ? "You win, refresh and try again!"
            : "Guess the word!"}
      </div>

      <HangmanDraw attempt={incorrectLetter.length} />

      <HangmanWord
        word={currentWord}
        selectedLetter={selectedLetter}
        reveal={isLoser}
        isLoser={isLoser}
        isWinner={isWinner}
      />

      <Keyboard
        onKeyboardClick={addLatter}
        inactiveLetter={incorrectLetter}
        activeLetter={selectedLetter.filter((letter) => {
          return currentWord.includes(letter)
        })}
        disabled={isGameOver}
      />
    </div>
  )
}

export default App
