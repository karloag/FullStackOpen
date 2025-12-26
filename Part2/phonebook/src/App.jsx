import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'040-1234567'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNetNumber] =useState('')

  const handleNameChange = (event) =>{ 
    setNewName(event.target.value)  
    console.log(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNetNumber(event.target.value)
    console.log(event.target.value)
  }



  const addPerson = (event) =>{
    event.preventDefault()

    if (persons.some(person => person.name === newName)){
        alert(`${newName} is already on the phonebook`)
    } else {
      const personObject = { name: newName, number: newNumber }

      setPersons(persons.concat(personObject))
      setNewName('')
      setNetNumber('')
    }
  }
  return(
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i ) => <li key={i}>{person.name} {person.number}</li>)}
      </ul>
      
    </div>
  )
}
export default App