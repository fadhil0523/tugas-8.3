
import clsx from "clsx"

interface HangManWordProps {
  word: string
  selectedLetter: string[]
  reveal: boolean
  isLoser: boolean
  isWinner: boolean
}

function HangmanWord({
  word,
  selectedLetter,
  reveal,
  isLoser,
  isWinner,
}: HangManWordProps) {
  return (
    <div className="flex gap-6">
      {word.split("").map((letter, index) => {
        const isRevealed = selectedLetter.includes(letter) || reveal
        const isWrong = isLoser && !currentWordIncludesLetter(
          selectedLetter,
          letter,
        )

        return (
          <span
            key={index}
            className="uppercase text-5xl font-semibold border-b-6 pb-2"
          >
            <span
              className={clsx(
                isRevealed ? "visible" : "invisible",
                isWinner && "text-green-500",
                isWrong && "text-red-500",
              )}
            >
              {letter}
            </span>
          </span>
        )
      })}
    </div>
  )
}

function currentWordIncludesLetter(
  selectedLetter: string[],
  letter: string,
) {
  return selectedLetter.includes(letter)
}

export default HangmanWord
