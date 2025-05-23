/* eslint-disable react/prop-types */
const App = () => {
  const course = {
   name : "Half Stack application development" ,
   parts : [ 
    
  {
     name: 'Fundamentals of React',
     exercises : 10},
  
   {
    name: 'Using props to p ass data',
    exercises:  7},

  {
        name: 'State of a component',
        exercises: 14}
  ]


}
  return (
    <div> 
      <Header course = {course.name}/>
      <Content part1 = {course.parts[0].name}  exercises1 = {course.parts[0].exercises} 
      part2={course.parts[1].name} exercises2={course.parts[1].exercises} 
      part3={course.parts[2].name} exercises3={course.parts[2].exercises}/>
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
      <Part part={props.part1} exercise={props.exercises1}/>
      <Part part={props.part2} exercise={props.exercises2}/>
      <Part part={props.part3} exercise={props.exercises3}/>
      </p>
    </div>
  )
}
const Part = (props)=>{
  return(
    <div>
       <p>
        {props.part} {props.exercise}
       </p>
    </div>
  )
}
const Total = (props)=>{
  return(
    <div>
      <p>
        Number of excercises {props.exercises1+props.exercises2+props.exercises3}
      </p>
    </div>
  )
}

export default App