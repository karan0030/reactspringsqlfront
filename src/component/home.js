import react from "react"
import  { BrowserRouter,Route,Switch, Link,Redirect,NavLink  } from 'react-router-dom';
import  StudentsPage from "./students"
import  NewStudent from "./addForm"

import "./home.css";


const Home =()=>{
  const toAdd =()=>{
    console.log("clicked")
    return <NavLink to="/create" />
  }
  return(
    <div >
      <h2>Student Records</h2>
      
      <button type="submit" class="addButton"  ><Link to ="/create">Add Student</Link> </button>
      <div className="table">
      <StudentsPage/>
      
      </div>

	</div>
  )

}




export default Home;