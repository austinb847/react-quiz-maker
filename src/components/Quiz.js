import React from "react";
import PropTypes from "prop-types"

function Quiz(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.changeSelectedQuiz(props.id)}>
        <h3>{props.name} - {props.author}</h3>
      </div>
    </React.Fragment>
  )
}

Quiz.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  changeSelectedQuiz: PropTypes.func,
  id: PropTypes.string
}

export default Quiz;