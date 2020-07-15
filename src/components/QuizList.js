import React, { useState } from "react";
import Quiz from "./Quiz";
import { useSelector } from "react-redux";
import { useFirestoreConnect, useFirestore, isLoaded, isEmpty, reactReduxFirebase } from "react-redux-firebase";
import PropTypes from "prop-types";

function QuizList(props) {
  useFirestoreConnect([
    { collection: "quizzes" }
  ]);

  const firestore = useFirestore();

  const quizzes = useSelector(state => state.firestore.ordered.quizzes);

  if (isLoaded(quizzes)) {
    return (
      <React.Fragment>
        {quizzes.map((quiz) => {
          return (
            <React.Fragment>
              <Quiz
                changeSelectedQuiz={props.changeSelectedQuiz}
                id={quiz.id}
                name={quiz.name}
                author={quiz.author}
              />
            </React.Fragment>
          )
        })
        }
      </React.Fragment >
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}
QuizList.propTypes = {
  selectedQuizId: PropTypes.string,
  changeSelectedQuiz: PropTypes.func
}

export default QuizList;