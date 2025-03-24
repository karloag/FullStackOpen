import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;
const StatisticLine= ({text, value})=>(
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);
const Statistics = ({good, neutral, bad })=> {
  const total =  good + neutral + bad; 
  const average = total ? ((good-bad)/total):0;
  const positivePercentage = total ? (good/total) * 100:0;

  if (total=== 0) {
    return <p>*no feedback given*</p>;
  }
  return (
    <div>
      <h3>Statistics</h3>
      <table>
      <tbody>
      <StatisticLine text="good" value = {good}/>
      <StatisticLine text="neutral" value = {neutral}/>
      <StatisticLine text="bad" value = {bad}/>
      <StatisticLine text="Total" value = {total}/>
      <StatisticLine text="Average" value = {average.toFixed(1)}/>
      <StatisticLine text="Positive" value = {`${positivePercentage.toFixed(1)}%`}/>
      </tbody>
      </table>    
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
      <Button handleClick={() => setGood (good + 1)} text={"good"}/>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}/>
      <Button handleClick={() => setBad(bad + 1)} text={"bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App