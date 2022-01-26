import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';

interface Props {
  
}

const LoginForm = (props: Props) => {

  return (
        <form >
          <label>
            Email
            <input name="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="Password" />
          </label>

          <PrimaryButton title="Login"/>
          
        </form> 
  )
}

export default LoginForm

/* export default LoginForm
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import PrimaryButton from '../Buttons/PrimaryButton';

interface Props {
  
}

const LoginForm = (props: Props) => {
  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid Email').max(128).required('Email is required'),
    password: yup.string().required('Password is required'),
  })

  return (
    <Formik 
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={() => {}}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label>
            Email
            <input name="email" placeholder="Email" />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="Password" />
          </label>

          <PrimaryButton title="Login"/>
          
        </form>
      )}
    </Formik>  
  )
}

export default LoginForm
 */