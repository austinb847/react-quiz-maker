import React from "react";
// import { withFirestore, isLoaded } from 'react-redux-firebase'
import { isLoaded } from 'react-redux-firebase'
import { useFirestore, useFirebase } from "react-redux-firebase";




function QuizControl() {
  const firebase = useFirebase();
  const auth = firebase.auth();
  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
  if (isLoaded(auth) && auth.currentUser === null) {
    return (
      <React.Fragment>
        <h3>Please Sign In!</h3>
      </React.Fragment>
    )
  }
  if (isLoaded(auth) && auth.currentUser !== null) {
    return (
      <React.Fragment>
        <h1>QUIZ CONTROL PLACEHOLDER</h1>
        <h2>Test!</h2>
      </React.Fragment>
    )
  }
}

export default QuizControl;

