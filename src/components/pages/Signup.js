import React from 'react'
import classes from '../../styles/Signup.module.css'
import Form from '../Form'
import Illustration from '../Illustration'
import TextInput from '../TextInput'

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>

      <div className={classes.column}>
        <Illustration/>
        <Form className = {`${classes.signup}`}>
            <TextInput type="text" placeholder="Enter Name" icon="person"></TextInput>
            <TextInput type="text" placeholder="Enter Email" icon="alternate_email"></TextInput>
            <TextInput type="password" placeholder="Enter password" icon="lock"></TextInput>
            <TextInput type="password" placeholder=" Confirm Name" icon="lock_clock"></TextInput>
        </Form>
      </div>
    </>
  )
}

export default Signup