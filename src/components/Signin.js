import React from 'react'
import firebase from 'firebase/app'

function Signin() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      console.log("Signed up (^__^)")
    }).catch(function (error) {
      console.log(error.message)
    });
  }

  return (
    <React.Fragment>
      <h1>Sign In (^__^)v </h1>
      <form onsubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='password' />
        <button type="submit">Sign up</button>
      </form>
    </React.Fragment>
  )
}

export default Signin

