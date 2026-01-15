import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'040-1234567'},
    { name: 'Ada Lovelace', number:'39-44-5323523'},
    { name: 'Dan Abramov', number:'12-43-234345'},
    { name: 'Mary Poppendieck', number:'39-23-6423122'}
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNetNumber] =useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) =>{ 
    setNewName(event.target.value)  
    console.log(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNetNumber(event.target.value)
    console.log(event.target.value)
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
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

  const personsToShow = filter 
    ? persons.filter(person =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    ) : persons
     
  return(
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      
       <h3>Add a new </h3>
    <PersonForm
    addPerson={addPerson}
    newName={newName}
    handleNameChange={handleNameChange}
    newNumber={newNumber}
    handleNumberChange={handleNumberChange}
    />
     <Persons persons={personsToShow}/>
    </div>
  )
}
export default App