import axios from 'axios'
import React from 'react'

import Test from './components/Test'
import Header from './components/Header'
import Trivia from './components/Trivia'
import Loading from './components/Loading'
import Form from './components/Form.jsx'

const API_URL = 'https://opentdb.com/api.php?amount='

const store = {
  sports: 21,
  geography: 22,
  history: 23,
  vehicles: 28,
  generalKnowledge: 9
}

const App = () => {
  const [tests, setTests] = React.useState([])
  const [error, setError] = React.useState(false)
  const [trivia, setTrivia] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [quiz, setQuiz] = React.useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuiz({ ...quiz, [name]: value })
  }

  const playAgain = () => {
    setTests([])
    setTrivia(false)
    setQuiz({
      amount: 10,
      category: 'sports',
      difficulty: 'easy',
    })
  }

  const dataFetched = () => {
    if(quiz.amount < 50) {
      setLoading(true)
      axios({
      method: 'GET',
      url: `${API_URL}${quiz.amount}&category=${store[quiz.category]}&difficulty=${quiz.difficulty}&type=multiple`
    }).then(response => {
      setTests(response.data.results)
      setLoading(false)
      setTrivia(true)
    }).catch(error => console.log(error))
    } else {
      setError(true)
    }
  }

  const test = <Test tests={tests} playAgain={playAgain}/>
  
  const setupForm = (
    <React.Fragment>
      <Form 
        quiz={quiz} 
        error={error}  
        handleChange={handleChange} 
      />
      <button 
        className='start-btn' 
        onClick={dataFetched}>
        start
      </button>
    </React.Fragment>
  )

  const children = trivia ? test : loading ? <Loading /> : setupForm

  return (
    <React.Fragment>
      <Header />
      <Trivia children={children} />
    </React.Fragment>
  )
}

export default App
