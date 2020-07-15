import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, useFirestore, isLoaded } from "react-redux-firebase";

function QuizDetail(props) {
  useFirestoreConnect([
    {
      collection: "quizzes",
      doc: props.selectedQuizId
    }
  ])

  // const firestore = useFirestore();

  // const questions = firestore.collection("questions").where("quizId", "==", "12345")
  //   .get()
  //   .then(function (querySnapshot) {
  //     querySnapshot.forEach(function (doc) {
  //       console.log(doc.id + " DATA: " + doc.data())
  //     })
  //   });


  // useFirestoreConnect([
  //   {
  //     collection: "questions",
  //     doc: props.selectedQuizId
  //   }
  // ])

  const quiz = useSelector(
    ({ firestore: { data } }) => data.quizzes && data.quizzes[props.selectedQuizId]
  )

  // const questions = useSelector(
  //   ({ firestore: { data } }) => data.questions && (data.questions.quizId === "props.selectedQuizId")
  // )

  //  const questions = useSelector(state => state.firestore.ordered.question).where("quizId", "==", "12345");

  //   .collection("questions")
  // .where("quizId", "==", "12345")

  // .collection("questions")
  // .where("question", "==", "props.selectedQuizId")

  //  can't get where of undefined
  //  ({ firestore: { data } }) => data.questions.where("quizId", "==", "props.selectedQuizId")
  // if (!isLoaded(questions)) {
  //   return (
  //     <React.Fragment>
  //       <h3>Loading...</h3>
  //     </React.Fragment>
  //   )
  // }
  // if (isLoaded(questions)) {
  return (

    <React.Fragment >
      <h1>QUIZ DETAILS</h1>
      <h3>Name: {quiz.name}</h3>
      <h3>Author: {quiz.author}</h3>
      {/* <h3>Questions:</h3>
        {console.log(quiz)}
        {console.log(questions)}

        <div>
          {questions.map((q) => {
            return (<p>{q.question}</p>)
          })}
        </div> */}
      <button onClick={() => props.toggleQuestionForm(
        true)}>Add Question</button>
      <button onClick={() => props.changeSelectedQuiz(
        null)}>Back To List</button>
    </React.Fragment >
  )

}

QuizDetail.propTypes = {
  changeSelectedQuiz: PropTypes.func,
  selectedQuizId: PropTypes.string,
  toggleQuestionForm: PropTypes.func
}

export default QuizDetail;