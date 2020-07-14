import React from "react";

function QuizDetail(props) {
  return (
    <React.Fragment>
      <h1>QUIZ DETAILS</h1>
      <button onClick={() => props.handleChangingSelectedQuiz(
        !props.quizDetailsShowing)}>See Details</button>
    </React.Fragment>
  )
}

export default QuizDetail;