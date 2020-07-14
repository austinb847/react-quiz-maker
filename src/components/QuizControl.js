import React, { useState } from "react";
import QuizList from "./QuizList";
import QuizDetail from "./QuizDetail";
// import { withFirestore, isLoaded } from 'react-redux-firebase'
import { isLoaded } from 'react-redux-firebase'
import { useFirestore, useFirebase } from "react-redux-firebase";

function QuizControl() {

  const firebase = useFirebase();
  const auth = firebase.auth();
  const [quizDetailsShowing, handleChangingSelectedQuiz] = useState(false)


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
    if (quizDetailsShowing) {
      return (
        <React.Fragment>
          <QuizDetail quizDetailsShowing={quizDetailsShowing} handleChangingSelectedQuiz={handleChangingSelectedQuiz} />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <QuizList quizDetailsShowing={quizDetailsShowing} handleChangingSelectedQuiz={handleChangingSelectedQuiz} />
        </React.Fragment>
      )
    }
  }
}


export default QuizControl;

