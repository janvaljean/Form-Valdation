import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, useFormik } from 'formik';

import './App.css';


function App() {
    const {handleChange,handleSubmit,values} = useFormik({
     initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        gender:"male"
     },
     onSubmit: values =>  { console.log(values)}}
   );
  return (
    <div className="App">

    <h1>Sign Up</h1>
  
      <form onSubmit={handleSubmit}  className='d-flex flex-column justify-content-center m-2 gap-1 align-items-center '>

        <label htmlFor="firstName">First Name</label>
        <input onChange={handleChange}  name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <input onChange={handleChange}  name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <input onChange={handleChange}
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <div className='m-2 gap-2 p-2'>
          <label htmlFor="Gender">Gender :</label>
          <span className='m-2'>Male</span>
          <input
           onChange={handleChange} 
           type="radio"  
           name="gender" 
           value="male" 
           checked={values.gender === 'male'} 
           />
          <span className='m-2'>Female</span>
          <input 
          onChange={handleChange} 
          type="radio"  
          name="gender" 
          value="female" 
          checked={values.gender === 'female'}  
          />
        </div>
        <div className="d-flex m-2">
            <div className='m-2'>
            <input onChange={handleChange}  type="checkbox" name='hobbies' value="football" />
            football
          </div>
          <div  className='m-2'>
            <input onChange={handleChange}  type="checkbox" name='hobbies' value="swimming" />
            swimming
          </div>
          <div  className='m-2'>
            <input onChange={handleChange}  type="checkbox" name='hobbies' value="basketball" />
            basketball
          </div>
        </div>

        <div className="m-2">
          <select name="program" onChange={handleChange} >
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
          </select>
        </div>
        
        
        

        <button type="submit">Submit</button>
        
        <code className='mt-5'>{JSON.stringify(values)}</code>
      </form>
      
    </div>
      )
  




  
}

export default App;
