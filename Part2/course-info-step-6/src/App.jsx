/* eslint-disable react/prop-types */
const App = () => {
  const course = {
   id : 1,
   name : "Half Stack application deve lopment" ,
   parts : [ 
    
    {
     name: 'Fundamentals of React',
     exercises : 10,
     id: 1
    },
   
    {
     name: 'Using props to pass data',  
     exercises:  7,
     id:2
    },
  
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    }  
  ]
}

  return (
    <div> 
      <Course course={course}/>
    </div>
  )
}

const Course = ({ course })=>{
  return(
  <div> 
  <Header course = {course.name} />
  <Content parts = {course.parts} />
  <Total parts= {course.parts} />
  </div>
  )
}

const Header = ({course}) =>{
  return(
    <div>
      <p>
       {course}
      </p>
    </div>
  )
}
const Content = ({parts}) =>{
  return(
    <div>
     {parts.map(part =>
        <Part key={part.id} part={part} />
     )}  
    </div>
  )
}

const Part = ({ part })=>{
  return(
    <div>
       <p>
        {part.name} {part.exercises}
       </p>
    </div>
  )
}
const Total = ({parts})=>{
  const totalExercises = parts.reduce((sum, part)=> sum + part.exercises, 0)
  return(
    <div>
      <p>
        total of {totalExercises} exercises
      </p>
    </div>
  )
}

export default App