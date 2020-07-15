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

  const firestore = useFirestore();

  let questionsArray = [];

  async function asyncGetQuestions() {
    const questions = await firestore.collection("questions").where("quizId", "==", props.selectedQuizId)
      .get()
      .then(function (querySnapshot) {
        // console.log("SNAPSHOT " + querySnapshot)
        querySnapshot.forEach(function (doc) {
          questionsArray.push(doc.data().question)
          console.log("TRACK ARRAY " + questionsArray)
          // console.log(doc.id + " DATA: " + doc.data())
          // console.log(doc.id + " DATA: " + doc.data().question)
        })
      })
    return questionsArray;
  };

  asyncGetQuestions();
  // async function asyncGetQuestions() {
  // const questionsArray = await firestor.collection("questions").where("quizId", "==", props.selectedQuizId).get().then(function (querySnapshot) {
  // querySnapshot.map(async query => {

  // })
  // })

  // const result = await Promise.all(asyncGetQuestions)

  // console.log("IS LOADED " + isLoaded(questions));

  // console.log("QUESTIONS LINE 31 " + questions);
  // console.log("FINAL ARRAY " + questionsArray);
  // console.log("IS LOADED " + isLoaded(questions));
  // useFirestoreConnect([
  //   {
  //     collection: "questions",
  //     doc: props.selectedQuizId
  //   }
  // ])

  const quiz = useSelector(
    ({ firestore: { data } }) => data.quizzes && data.quizzes[props.selectedQuizId]
  )

  // if (!isLoaded(questions)) {
  // return (
  //   <React.Fragment>
  //     <h3>Loading...</h3>
  //   </React.Fragment>
  // )
  // }
  // if (isLoaded(questions)) {

  // react component SUSPENSE will wait to render objects until available 
  return (
    <React.Fragment >
      <h1>QUIZ DETAILS</h1>
      <h3>Name: {quiz.name}</h3>
      <h3>Author: {quiz.author}</h3>
      <h3>Questions:</h3>
      <div>{}</div>
      <div>
        {questionsArray.forEach((q) => {
          return (<p>{q}</p>)
        })}
      </div>
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