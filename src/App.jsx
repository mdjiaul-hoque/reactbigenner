import './App.css'

function App() {

  return (
    <>


    {/* General */}
     <Person></Person>
     <Person></Person>

    {/* Basic Props handle */}
     <Devloper name = " xyz " tech = " js "> </Devloper>
     <Devloper name = " aaaa " tech = " React "> </Devloper>

    {/* type 2 props handle */}
    <Course courseName = " js" courseFree = '2000'></Course>
    <Course courseName = " js" ></Course>

    </>
  )
}





function Course ( {courseName,courseFree = 1000}) {
  return(
    <>
  <h3>Course Name:{courseName} </h3>
  <p> Course Free: {courseFree}</p>
  </>
  )
}

function Devloper(props) {
  return(
    <>
    <h2> Developer: {props.name } </h2>
    <p> Technology: {props.tech } </p>
    </>
  )
}



function Person() {
  return(
    <p>Hello component</p>
  )
}

export default App
