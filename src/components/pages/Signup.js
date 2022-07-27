import React from 'react'
import SignUpForm from '../SignUpForm'
import Illustration from '../Illustration'
const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration/>
        <SignUpForm/>
      </div>
    </>
  )
}

export default Signup