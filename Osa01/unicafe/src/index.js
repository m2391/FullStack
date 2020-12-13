import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>{text}</button>)

const StatisticsLine = ({text, value}) => (
  <tr><td>{text}</td><td>{value}</td></tr>
)

const Average = ({good, bad, feedbackCount}) => {
  const average = ( good  - bad  ) / feedbackCount

  return (<tr><td>Palautteen keskiarvo</td><td>{average}</td></tr>)
}

const Positive = ({good, feedbackCount}) => {
  const positivePercent = (good / feedbackCount) * 100

  return ( <tr><td>Positiivista annettu: </td><td> {positivePercent} %</td></tr>)
}

const Statistics = ({good, neutral, bad}) => {
  const Counter = good + neutral + bad

  if (Counter === 0) {
    return <p>Ei annettua palautetta! </p>
  }

  return (
    <table>
      <tbody>
      <StatisticsLine text="Hyvä" value={good}/>
      <StatisticsLine text="Neutraali" value={neutral}/>
      <StatisticsLine text="Huono" value={bad}/>
      <StatisticsLine text="Yhteensä" value={Counter} />
      <Average good={good} neutral={neutral} bad={bad} feedbackCount={Counter}/>
      <Positive good={good} feedbackCount={Counter}/>
      </tbody>
    </table>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button text="Hyvä" handleClick={() => setGood(good+1)}/>
      <Button text="Neutraali" handleClick={() => setNeutral(neutral+1)}/>
      <Button text="Huono" handleClick={() => setBad(bad+1)}/>
      <h1>Jo annetut palautteet</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)