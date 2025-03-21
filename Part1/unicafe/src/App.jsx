import { useState } from 'react'

const Statistics = ({good, neutral, bad })=> {
  const total =  good + neutral + bad; 
  const average = total ? (good/total):0;
  const positivePercentage = total ? (good/total) * 100:0;

  if (total=== 0) {

    return <p>*no feedback given*</p>;
  }

  return (
    <div>
      <h3>Statistics</h3>
      <p>good:{good}</p>
      <p>neutral:{neutral}</p>
      <p>bad:{bad}</p>
      <p>total:{total}</p>
      <p>average:{average}</p>
      <p>positive:{positivePercentage}%</p>
    </div>

  )
}



const App = () => {


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={()=> setGood (good +1)}>good</button>
      <button onClick={()=> setNeutral (neutral +1)}>neutral</button>  
      <button onClick={()=> setBad (bad +1)}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App