import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {

   const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => onDeleteQuestion(question));
  }

  function handleChangeAnswer() {
    console.log(correctIndex)
    fetch(`http://localhost:4000/questions/${question.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "correctIndex":correctIndex
    }),
  })
    .then((r) => r.json())
    .then((updatedQuestion) => onUpdateQuestion(updatedQuestion))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={()=> handleChangeAnswer()} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;