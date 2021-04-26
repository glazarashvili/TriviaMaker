import React from 'react'

const Results = ({ correct, amount, playAgain }) => {
  return (
    <div className='results-container'>
        <p className='results-text'>
          You answered 
          <span>{correct}</span> out of 
          <span>{amount} ({correct / amount * 100}%)</span> 
          questions correctly. 
        </p>
        <p className='results-text'>
          Click below and try again.
        </p>
        <button className='play-again-btn' onClick={playAgain}>
          Play Again
        </button>
    </div>
  )
}

export default Results
