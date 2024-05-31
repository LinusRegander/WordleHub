import React from 'react'

// components
import Row from './Row'

export default function Grid({ solution, guesses, currentGuess, turn }) {
  const solutionLength = solution.length
  return (
    <div id="grid-wrapper">
      {guesses.map((g, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} solutionLength={solutionLength} />
        }
        return <Row key={i} guess={g} solutionLength={solutionLength} /> 
      })}
    </div>
  )
}
