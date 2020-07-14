import React from 'react'
import firebase from 'firebase/app'

function Signin() {
  //////////////////////////////SIGN UP//////////////////////////////////
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
      console.log("Signed up (^__^)");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  //////////////////////////////SIGN IN//////////////////////////////////
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      console.log("Signed in (^__^)");
    }).catch(function (error) {
      console.log(error.message);
    })
  }

  //////////////////////////////SIGN OUT//////////////////////////////////
  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log("Signed out ; w ;");
    }).catch(function (error) {
      console.log(error.message);
    })
  }
  return (
    <React.Fragment>
      <h1>Sign Up (^__^)v </h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <br />
        <input
          type='password'
          name='password'
          placeholder='password' />
        <br />
        <button type="submit">Sign up</button>
      </form>

      <h1>Sign In (^□^)v </h1>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <br />
        <input
          type='password'
          name='password'
          placeholder='password' />
        <br />
        <button type="submit">Sign in</button>
      </form>

      <h1>Sign Out ( ; w ; )v</h1>
      <button onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  )
}

export default Signin

