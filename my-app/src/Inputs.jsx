import React from 'react'
import {  useFormik } from 'formik';

const Inputs = () => {
    const {handleChange,handleSubmit,values} = useFormik({
     initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        gender:"male"
}})
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
        <input onChange={handleChange}  name="firstName" value={values.firstName} placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <input onChange={handleChange}  name="lastName" value={values.lastName} placeholder="Doe" />

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
          <select name="program" value={values.program} onChange={handleChange} >
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
          </select>
        </div>
        
    </div>
  )
}

export default Inputs
