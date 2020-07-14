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
              {/* <h1>{props.quizDetailsShowing}</h1> */}
              <Quiz
                // handleChangingSelectedQuiz={props.handleChangingSelectedQuiz}
                name={quiz.name}
                author={quiz.author}
              />
              {/* separate function to show, then create a hook to determine how to display */}
              <button onClick={() =>
                !props.quizDetailsShowing}>See Details</button>

              {/* // firestore.get({ collection: "quizzes", doc: quiz.id })
                //   .then((quiz) => { 
                //     console.log("clicked");
                //     console.log(selectedQuiz)
                //     selectedQuiz + 1
                // return {
                //   name: quiz.get('name'),
                //   author: quiz.get('author')
                // }
                // })*/}

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
  handleChangingSelectedQuiz: PropTypes.func,
  quizDetailsShowing: PropTypes.bool
}

export default QuizList;