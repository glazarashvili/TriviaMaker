import React from 'react'

import Results from './Results'


const Test = ({ tests, playAgain }) => {

  const [correct, setCorrect] = React.useState(0)
  const [questionRow, setQuestionRow] = React.useState(0)

  const nextQuestion = () => setQuestionRow(prevState => prevState + 1)
  const checkAnswer = (value) => {
    if (value) {
      setCorrect(prevState => prevState + 1)
    }
    nextQuestion()
  }

  const results = (
    <Results 
      correct={correct} 
      amount={questionRow} 
      playAgain={playAgain} 
    />
  )

  return (
    <React.Fragment>
      {tests.length > questionRow ? (
          <div>
            {tests.map((item, index) => {

            let correct_answer = item.correct_answer
            let incorrect_answers = item.incorrect_answers
            let allAnswers = [...incorrect_answers, correct_answer]
            const shuffledArray = allAnswers.sort(() => Math.random() - 0.5)

            return (
                <div className='answers' key={index}>
                  <h2 className='question' dangerouslySetInnerHTML={{ __html: item.question }} />
                  <section className='all-answers'>
                    {shuffledArray.map((answer, index) => {
                      return (
                        <button dangerouslySetInnerHTML={{ __html: answer }}
                          key={index}
                          className='answer-btn' 
                          onClick={() => checkAnswer(answer === correct_answer)} 
                        />
                      )
                    })}
                  </section> 
                  <section className='results-section'>
                    <p className='correct-answers' >Correct: {correct} / {questionRow}</p>
                    <button 
                      className='next-question-btn' 
                      onClick={nextQuestion}
                    >Next Question</button>
                  </section>
                </div>
            )
            })[questionRow]}
          </div> 
        ) : results
      }
    </React.Fragment>
  )
}

export default Test
