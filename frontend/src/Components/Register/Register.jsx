import React, { useState } from 'react';
import styles from './Register.module.css';
const Register = () => {
  
  const [username,setUsername]=useState("");
  const [company,setCompany]=useState("");
  const [designation,setDesignation]=useState("")
  const [password,setPassword]=useState("");
  const [CnfPassword,setCnfPassword]=useState("");
  const [email,setEmail]=useState("");
  console.log(username,company,designation,password,CnfPassword,email);
  return (
    <>
      <div className={styles.container}>
          <div className={styles.RegMenu}>
              <div className={styles.head}>
                <center>
                    <h3>Register With Us</h3>
                </center>
              </div>
              <form>
              <div class="mb-3 px-3">
                    <label for="exampleFormControlInput1" class="form-label"><h5>Name</h5></label>
                    <input class="form-control" id="name" name="username" placeholder="Name" onChange={e=>setUsername(e.target.value)}/>
              </div>
              <div class="mb-3 px-3">
                    <label for="exampleFormControlInput1" class="form-label"><h5>Email</h5></label>
                    <input class="form-control email" id="name" name="Email" placeholder="email@company.com" onChange={e=>setEmail(e.target.value)}/>
              </div>
              <div class="mb-3 px-3">
                    <label for="exampleFormControlInput1" class="form-label"><h5>Company Name</h5></label>
                    <input class="form-control" id="name" name="company" placeholder="Company Name" onChange={e=>setCompany(e.target.value)}/>
              </div>
              <div class="mb-3 px-3">
              <label for="exampleFormControlInput1" class="form-label"><h5>Designation</h5></label>
              <select class="form-select  mb-3" aria-label="Large select example" onChange={e=>setDesignation(e.target.value)}>
                    <option value="CTO">CTO</option>
                    <option value="HR">HR</option>
                    <option value="LEAD-TALENT ACQUISTION">LEAD-TALENT ACQUISTION</option>
                    <option value="Others" >Others</option>
              </select> 
              </div>
              <div class="mb-3 px-3">
                    <label for="exampleFormControlInput1" class="form-label"><h5>Password</h5></label>
                    <input class="form-control" id="name" name="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
              </div>
              <div class="mb-3 px-3">
                    <label for="exampleFormControlInput1" class="form-label"><h5>Confirm Password</h5></label>
                    <input class="form-control" id="name" name="pass2" placeholder="Confirm Password" onChange={e=>setCnfPassword(e.target.value)}/>
              </div>
                    <center>
                      <button type="button" class="btn btn-primary">Register</button>
                    </center> 
              </form>
          </div>
      </div>
    </>
  )
}

export default Register
