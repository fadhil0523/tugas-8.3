
import clsx from "clsx"

const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

interface KeyboardProps {
  onKeyboardClick: (letter: string) => void
  inactiveLetter: string[]
  activeLetter: string[]
  disabled: boolean
}

function Keyboard({
  onKeyboardClick,
  inactiveLetter,
  activeLetter,
  disabled,
}: KeyboardProps) {
  return (
    <div className="flex border w-150 flex-wrap gap-2">
      {KEYS.map((letter, index) => {
        const lowerLetter = letter.toLowerCase()
        const isInactive = inactiveLetter.includes(lowerLetter)
        const isActive = activeLetter.includes(lowerLetter)

        return (
          <button
            key={index}
            disabled={disabled || isInactive || isActive}
            onClick={() => onKeyboardClick(lowerLetter)}
            className={clsx(
              "border p-6",
              isInactive && "bg-gray-400",
              isActive && "bg-blue-500",
              disabled && "cursor-not-allowed opacity-50",
            )}
          >
            {letter}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard
