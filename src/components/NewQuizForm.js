import React from 'react'
import PropTypes from 'prop-types'
import { useFirestore } from 'react-redux-firebase'

//Add new quiz form -general info
// Sumbit navigates to quiz details
// quiz details has add question button
// pass quizId from quiz to question
// add question has question and answer form fileds

function NewQuizForm(props) {

  const firestore = useFirestore();

  function AddNewQuiz(event) {
    event.preventDefault();
    props.toggleForm(false);

    return firestore.collection('quizzes').add(
      {
        author: event.target.author.value,
        name: event.target.quiz.value,
        date: firestore.FieldValue.serverTimestamp()
      }
    )
  }
  return (
    <React.Fragment>
      <form onSubmit={AddNewQuiz}>
        <input
          type="text"
          name="quiz"
          placeholder="Quiz Name" />
        <input
          type="text"
          name="author"
          placeholder="Author" />
        <button type='submit'>Add Quiz</button>
      </form>
      <button onClick={() => props.toggleForm(
        false)}>Back To List</button>
    </React.Fragment >
  )
}
NewQuizForm.propTypes = {
  toggleForm: PropTypes.func,
  changeSelectedQuiz: PropTypes.func
};

export default NewQuizForm;


// onClick={() => props.changeSelectedQuiz(quizId)} NAVIGATE ON SUBMIT? NEED TO GRAB ID, BUT JUST CREATED WITH FORM?