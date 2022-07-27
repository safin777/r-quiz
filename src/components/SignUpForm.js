import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import classes from '../styles/Signup.module.css'
import Button from './Button'
import Checkbox from './Checkbox'
import Form from './Form'
import TextInput from './TextInput'

import { useAuth } from '../context/AuthContext'


const SignUpForm = () => {
 const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(' ');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState();
  

  const {signup} = useAuth();
  const history = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();
    if(password !== confirmPassword){
      return setError('Passwords do not match');
    }
  
    try{
      setError('');
      setLoading(true);
      await signup(username, email, password);
      history.push('/');
    } catch(err){
      setError(err);
      setLoading(false);
      setError('Failed to sign up');
    }
    
    
  }

  return (
    <Form className = {`${classes.signup}`} onSubmit = {handleSubmit}>
            <TextInput type="text" placeholder="Enter Name" icon="person" value ={username} onChange = {(e)=>{
              setUsername(e.target.value)
            }}/>
            <TextInput type="text" placeholder="Enter Email" icon="alternate_email" value ={email} onChange = {(e)=>{
              setEmail(e.target.value)
            }}/>
            <TextInput type="password" placeholder="Enter password" icon="lock" value ={password} onChange = {(e)=>{
              setPassword(e.target.value)
            }}/>
            <TextInput type="password" placeholder=" Confirm Name" icon="lock_clock"  value ={confirmPassword} onChange = {(e)=>{
              setConfirmPassword(e.target.value)
            }}/>
            <Checkbox  text="I agree to the Terms &amp; Conditions"  value ={agree} onChange = {(e)=>{
              setAgree(e.target.value)
            }}/>
            <Button disabled={loading} type = "submit" ><span>Submit Now</span></Button>
            {/* //show error message */}

            {error && <p className="error">{error}</p>}

            <div className="info">
              Already have an account? <Link to="/login">Login</Link> instead.
            </div>
      </Form>
  )
}

export default SignUpForm