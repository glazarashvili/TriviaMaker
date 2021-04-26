import React from 'react'

const SetupForm = ({ error, quiz, handleChange }) => {

  return (
    <main>
      <section>
        <form className='setup-form'>
          <h2>Make your Quiz</h2>
          <div className='form-control'>
            <label htmlFor='amount'>number of questions:</label>
            <input
              type='number'
              name='amount'
              id='amount'
              value={quiz.amount}
              onChange={handleChange}
              className='form-input amount'
              min={1}
              max={50}
            />
          </div>

          <div className='form-control'>
            <label htmlFor='category'>category:</label>
            <select
              name='category'
              id='category'
              className='form-input'
              value={quiz.category}
              onChange={handleChange}
            >
              <option value='sports'>Sports</option>
              <option value='geography'>Geography</option>
              <option value='history'>History</option>
              <option value='vehicles'>Vehicles</option>
              <option value='generalKnowledge'>General knowledge</option>
            </select>
          </div>

          <div className='form-control'>
            <label htmlFor='difficulty'>difficulty:</label>
            <select
              name='difficulty'
              id='difficulty'
              className='form-input'
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
          </div>
        </form>

        {error && (
            <p className='error-text'>
              sorry. can't loaded questions. please try different options
            </p>
        )}
      </section>
    </main>
  )
}

export default SetupForm
