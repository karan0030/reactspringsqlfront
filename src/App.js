import React from"react"
import {BrowserRouter,Route,Switch  } from "react-router-dom"
 
import  StudentsPage from "./component/students"
import  NewStudent from "./component/addForm"
import  Home from "./component/home"

const App=()=>{
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/students" component={StudentsPage}/>
                        <Route path="/create" component={NewStudent}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}


export default App;