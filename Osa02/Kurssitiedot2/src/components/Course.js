import React from 'react'

const Header = props =>
  <h2>{props.course.name}</h2>

const Part = props =>
  <p>{props.name} {props.exercises}</p>

const Content = (props) => {
    return (
        <div>
            {props.course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}  
        </div>
    )
}

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

export default Course
