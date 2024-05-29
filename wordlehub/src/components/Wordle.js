import React, { useEffect, useState } from 'react'
import useWordleHub from '../hooks/useWordleHub'

// components
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'
import PointSystem from './Points'

// utils
import { getCookie, setCookie } from '../utils/Cookies'

const pointsArr = [0, 500, 400, 300, 200, 100];

export default function WordleHub({ solution }) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordleHub(solution)
  const [showModal, setShowModal] = useState(false)
  const [points, setPoints] = useState(0);

  let currentPoints = getCookie();

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    if (isCorrect) {
      setPoints(pointsArr[turn]);
      if (points > currentPoints) {
        setCookie(points);
      }
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }
    if (turn > 5) {
      setTimeout(() => setShowModal(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, isCorrect, turn])

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} solution={solution}/>
      <Keypad usedKeys={usedKeys} />
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
      <PointSystem score={currentPoints} />
    </div>
  )
}
