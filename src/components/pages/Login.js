import React from 'react'
import classes from '../../styles/Login.module.css'
import Button from '../Button'
import Form from '../Form'
import Illustration from '../Illustration'
import TextInput from '../TextInput'

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter password" icon="lock" />
          <Button><span>Submit Now</span></Button>
        </Form>
      </div>
    </>
  )
}

export default Login
