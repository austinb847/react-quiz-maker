import React, { useState } from "react";
import QuizList from "./QuizList";
import QuizDetail from "./QuizDetail";
// import { withFirestore, isLoaded } from 'react-redux-firebase'
import { isLoaded } from 'react-redux-firebase';
import { useFirebase } from "react-redux-firebase";


function QuizControl() {

  const firebase = useFirebase();
  const auth = firebase.auth();
  const [selectedQuizId, changeSelectedQuiz] = useState(null) //hook 

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
    if (selectedQuizId != null) {
      return (
        <React.Fragment>
          <QuizDetail selectedQuizId={selectedQuizId} changeSelectedQuiz={changeSelectedQuiz} />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <QuizList changeSelectedQuiz={changeSelectedQuiz} />
        </React.Fragment>
      )
    }
  }
}


export default QuizControl;

