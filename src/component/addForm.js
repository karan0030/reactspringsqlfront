import React, { useState } from 'react';

import {  Link,Redirect } from 'react-router-dom'
import {createStudent} from "../service/service"

import { nanoid } from 'nanoid'

import './addStudent.css';

const CreateStudent = () => {

  const todaydate=()=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today;
  }

  const [values,setValues] =useState({
    address: "",
    city: "",
    class_opt: "",
    date: "",
    dob: "",
    email: "",
    father_name: "",
    id: "",
    marks: "",
    phone: "",
    pin: "",
    state: "",
    student_name: "",
    
    id:nanoid(),
    date_enrol :todaydate(),
    error:"",
    success:false,
})


const { 
         address,city,class_opt,date,dob,email,father_name,id,marks,phone,pin,state,student_name,error,success,date_enrol 
            
        }= values;  
    

const handleChange =name=>event=>{
    setValues({...values,error:false,[name]:event.target.value})
}

const onSubmit =event=>{
    event.preventDefault()
    setValues({...values,[date_enrol]:todaydate()})
    setValues({...values,error:false})
    console.log({address,city,class_opt,date,dob,email,father_name,id,marks,phone,pin,state,student_name,date_enrol })
    createStudent({address,city,class_opt,date,dob,email,father_name,id,marks,phone,pin,state,student_name,date_enrol })
    .then(data=>{
        if(data.error){
            setValues({...values ,error:data.error,success:false})
        }
        else{
            setValues({...values,error:"",success:true})

        }
    })
    .catch(console.log("error in creating "))
}

const successMessage = () => {
    return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-success"
              style={{ display: success ? "" : "none" }}
            >
              New Student was created successfully. Please{" "}
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      );
    };
  
    const errorMessage = () => {
      return (

        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-danger"
              style={{ display: error ? "" : "none" }}
            >
              {error}
            </div>
          </div>
        </div>
      );
    };

    const AddStudent = () => {
      return (
      <div >            
      <div class="container">
          <div class="row">
              <div class="col-lg-3 col-md-2"></div>
              <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">
                  AddStudent
                </div>
                <div class="col-lg-12 login-form">
                  <div class="col-lg-12 login-form">
                    <form>
                      <div class="form-group">
                        <label class="form-control-label">Name</label>
                        <input 
                          className='form-control' onChange={handleChange("student_name")} 
                          type="text" value={student_name} required ></input>
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">Father Name</label>
                        <input 
                          className='form-control' onChange={handleChange("father_name")} 
                          type="text" value={father_name} required ></input>
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">Email</label>
                        <input 
                          className='form-control' onChange={handleChange("email")} 
                          type="email" value={email}></input>
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">City</label>
                        <input 
                          className='form-control' onChange={handleChange("city")} 
                          type="text" value={city} required ></input>
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">State</label>
                        <input 
                          className='form-control' onChange={handleChange("state")} 
                          type="text" value={state} required ></input>
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">Address</label>
                        <input 
                          className='form-control' onChange={handleChange("address")} 
                          type="text" value={address} required ></input>
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">Phone</label>
                        <input 
                          className='form-control' onChange={handleChange("phone")} 
                          type="text" value={phone} required ></input>
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">Marks</label>
                        <input 
                          className='form-control' onChange={handleChange("marks")} 
                          type="number" value={marks} required ></input>
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">Class opted</label>
                        <input 
                          className='form-control' onChange={handleChange("class_opt")} 
                          type="text" value={class_opt} required ></input>
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">DOB</label>
                        <input 
                          className='form-control' onChange={handleChange("dob")} 
                          type="number" value={dob} required ></input>
                      </div>
                      <div class="form-group">
                        <label class="form-control-label">PIN</label>
                        <input 
                          className='form-control' onChange={handleChange("pin")} 
                          type="number" value={pin} required ></input>
                      </div>
                      <div class="col-lg-12 loginbttm">
                        <div class="col-lg-6 login-btm login-text"></div>
                        <div class="col-lg-6 login-btm login-button">
                          <button type="submit" class="btn btn-outline-primary" onClick={onSubmit} >Create</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
              </div>
            </div>
          </div>
        </div>
      
    )
  }
  return (
  <div >
  {AddStudent()}
  </div>

  )
}

export default CreateStudent;