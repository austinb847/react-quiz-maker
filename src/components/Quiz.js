import React from "react";
import PropTypes from "prop-types"

function Quiz(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - {props.author}</h3>
    </React.Fragment>
  )
}

Quiz.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string
}

export default Quiz;