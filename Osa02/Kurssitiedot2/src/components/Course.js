import React from 'react'

//otsikko
const Header = props =>
  <h2>{props.course.name}</h2>

//yksittäisen kurssin nimi ja sen tehtävät
const Part = props =>
  <p>{props.name} {props.exercises}</p>

//opintojakson sisältö
const Content = (props) => {
  console.log(props) 
  return (
        <div>
            {props.course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}  
        </div>
    )
}
//käydään läpi kurssin tehtävät
const Total = (props) => {
    const parts = props.course.parts.map(course => course.exercises)
  
    return (
      <h3><p>Total of {parts.reduce((s, p) => s + p)} exercises</p></h3>
    )
  }

const Course = (props) => {  
    
    return (
        <div>
            <Header course={props.course} />
            <Content course={props.course} />
            <Total course={props.course} />
        </div>
  )
}
//exportataan Course eteenpäin
export default Course
