import React from 'react'
import { useFormik } from 'formik';
import validations from './Validation';

const SignUp = () => {
    const {handleChange,handleSubmit,handleBlur,values,errors,touched} = useFormik({
     initialValues: {
        passwordConfirm: '',
        password: '',
        email: ''  
        
     },
     onSubmit: values =>  { console.log(values)},
     validationSchema: validations,
    }
   );


  return (
    <div>
       <div className="App">

    <h1>Sign Up</h1>
  
      <form onSubmit={handleSubmit}  className='d-flex flex-column justify-content-center m-2 gap-1 align-items-center '>

        <label htmlFor="email">Email</label>
        <input onChange={handleChange}
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
          onBlur = {handleBlur}
        />
        {errors.email && touched.email&& <div className='text-danger'>{errors.email}</div>}  
        <label htmlFor="password">password</label>
        <input onChange={handleChange}
          name="password"
          placeholder="********"	
          type="password"
          value={values.password}
          onBlur = {handleBlur}
        />
        {errors.password && touched.password && <div className='text-danger'>{errors.password}</div>}  
        <label htmlFor="passwordConfirm">passwordConfirm</label>
        <input onChange={handleChange}
          onBlur = {handleBlur}
          name="passwordConfirm"
          placeholder="********"	
          type="password"
          value={values.passwordConfirm}
        />
        {errors.passwordConfirm && touched.passwordConfirm && <div className='text-danger'>{errors.passwordConfirm}</div>}  
   
        <button type="submit">Submit</button>
       
        
        <code className='mt-5'>{JSON.stringify(values)}</code>
      </form>
      
    </div>
    </div>
  )
}

export default SignUp
