import React from 'react'
import { useFirestore } from 'react-redux-firebase'
import PropTypes from 'prop-types'

function NewQuestionForm(props) {
  const { selectedQuizId } = props;

  const firestore = useFirestore();

  function createQuestions(event) {
    event.preventDefault();
    props.toggleQuestionForm(false);
    return firestore.collection("questions").add({
      quizId: selectedQuizId,
      question: event.target.question.value,
      a1: event.target.a1.value,
      a2: event.target.a2.value,
      a3: event.target.a3.value,
      a4: event.target.a4.value
    })
  }

  return (
    < React.Fragment >
      <form onSubmit={createQuestions}>
        <input
          type="text"
          name="question"
          placeholder="Question" />
        <input
          type="text"
          name="a1"
          placeholder="Answer 1" />
        <input
          type="text"
          name="a2"
          placeholder="Answer 2" />
        <input
          type="text"
          name="a3"
          placeholder="Answer 3" />
        <input
          type="text"
          name="a4"
          placeholder="Answer 4" />
        <button type='submit'>Add Question</button>
      </form>
      <button onClick={() => props.toggleQuestionForm(
        false)}>Back To Details</button>
    </React.Fragment >
  )
}

NewQuestionForm.propTypes = {
  selectedQuizId: PropTypes.string,
  toggleQuestionForm: PropTypes.func
}

export default NewQuestionForm



