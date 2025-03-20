import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total=good + neutral + bad;
  const average = total ? (good-bad)/total : 0 ;
  const positive = total ? (good/total) * 100 : 0;

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={()=> setGood (good +1)}>good</button>
      <button onClick={()=> setNeutral (neutral +1)}>neutral</button>  
      <button onClick={()=> setBad (bad +1)}>bad</button>


      <h3>statistics</h3>
      <p>good:{good}</p>
      <p>neutral:{neutral}</p>
      <p>bad:{bad}</p>
      <p>total:{total}</p>
      <p>average:{average.toFixed(2)}</p>
      <p>positive:{positive.toFixed(2)}%</p>
      
       
    </div>
  )
}

export default App