/* eslint-disable react/prop-types */
const App = () => {
  const course = {
   id : 1,
   name : "Half Stack application development" ,
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
      id: 2
    }  
  ]
}

  return (
    <div> 
      <Header course = {course.name}/>
      <Content
      
      />
      <Total exercises1 = {course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
    </div>
  )
}

const Header = (props) =>{
  return(
    <div>
      <p>
       {props.course}
      </p>
    </div>
  )
}
const Content = (props) =>{
  return(
    <div>
      <p>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
      </p>
    </div>
  )
}
const Part = (props)=>{
  return(
    <div>
       <p>
        {props.part.name} {props.part.exercise}
       </p>
    </div>
  )
}
const Total = (props)=>{
  const totalExercises = props.pars[0].exercises+props.pars[1].exercises+props.pars[2].exercises
  return(
    <div>
      <p>
        Number of excercises: {totalExercises}
      </p>
    </div>
  )
}

export default App