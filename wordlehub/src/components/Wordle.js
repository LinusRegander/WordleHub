import React, { useEffect, useState } from 'react'
import useWordleHub from '../hooks/useWordleHub'

// components
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'
import PointSystem from './Points'

// utils
import { getCookie, setCookie } from '../utils/Cookies'

const pointsArr = [500, 400, 300, 200, 100];

export default function WordleHub({ solution }) {
  console.log(solution);

  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordleHub(solution)
  const [showModal, setShowModal] = useState(false)
  const [points, setPoints] = useState(0);

  let currentPoints = getCookie();

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      if (!currentPoints) {
        setPoints(pointsArr[turn]);
        setCookie(currentPoints + points);
      } else if (points > currentPoints) {
        setCookie(points);
      } else {
        setPoints(pointsArr[turn]);
      }

      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn, currentPoints, points])

  return (
    <div id="game-wrapper">
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} solution={solution}/>
      <Keypad usedKeys={usedKeys} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
      <PointSystem score={currentPoints} />
    </div>
  )
}
