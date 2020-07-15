import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirebase, useFirestoreConnect } from "react-redux-firebase";

function QuizDetail(props) {
  useFirestoreConnect([
    {
      collection: "quizzes",
      doc: props.selectedQuizId
    }
  ])

  const quiz = useSelector(
    ({ firestore: { data } }) => data.quizzes && data.quizzes[props.selectedQuizId]
  )
  return (
    <React.Fragment>
      <h1>QUIZ DETAILS</h1>
      <h3>Name: {quiz.name}</h3>
      <h3>Author: {quiz.author}</h3>
      <h3>Question: {quiz.q1[0]}</h3>
      <button onClick={() => props.changeSelectedQuiz(
        null)}>Back To List</button>
    </React.Fragment>
  )
}

QuizDetail.propTypes = {
  changeSelectedQuiz: PropTypes.func,
  selectedQuizId: PropTypes.string,
}

export default QuizDetail;