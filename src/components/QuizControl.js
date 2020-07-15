import React, { useState } from "react";
import QuizList from "./QuizList";
import QuizDetail from "./QuizDetail";
import NewQuizForm from "./NewQuizForm";
// import { withFirestore, isLoaded } from 'react-redux-firebase'
import { isLoaded } from 'react-redux-firebase';
import { useFirebase } from "react-redux-firebase";
import NewQuestionForm from "./NewQuestionForm";


function QuizControl() {

  const firebase = useFirebase();
  const auth = firebase.auth();
  const [selectedQuizId, changeSelectedQuiz] = useState(null) //hook
  const [addFormVisible, toggleForm] = useState(false);
  const [addQuestionFormVisible, toggleQuestionForm] = useState(false);



  // if (!isLoaded(auth)) {
  //   return (
  //     <React.Fragment>
  //       <h3>Loading...</h3>
  //     </React.Fragment>
  //   )
  // }
  // if (isLoaded(auth) && auth.currentUser === null) {
  //   return (
  //     <React.Fragment>
  //       <h3>Please Sign In!</h3>
  //     </React.Fragment>
  //   )
  // }
  // if (isLoaded(auth) && auth.currentUser !== null) {
  if (addFormVisible) {
    return (
      <React.Fragment>
        < NewQuizForm toggleForm={toggleForm} changeSelectedQuiz={changeSelectedQuiz} />
      </React.Fragment>
    )
  } else if (addQuestionFormVisible) {
    return (
      <React.Fragment>
        < NewQuestionForm selectedQuizId={selectedQuizId} toggleQuestionForm={toggleQuestionForm} />
      </React.Fragment>
    )
  } else if (selectedQuizId != null) {
    return (
      <React.Fragment>
        <QuizDetail selectedQuizId={selectedQuizId} toggleQuestionForm={toggleQuestionForm} changeSelectedQuiz={changeSelectedQuiz} />
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <QuizList changeSelectedQuiz={changeSelectedQuiz} />
        <button onClick={() => toggleForm(true)}> Create Quiz (ﾟДﾟ)</button>
      </React.Fragment >
    )
  }
}
// }


export default QuizControl;

