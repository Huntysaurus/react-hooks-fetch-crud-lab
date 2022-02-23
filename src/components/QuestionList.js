import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ onChangedQuestion, questionsData, onRemoveQuestion }) {

  const individualQuestion = questionsData.map(question => <QuestionItem key={question.prompt} question={question} onUpdateQuestion={onChangedQuestion} onDeleteQuestion={onRemoveQuestion}/>)

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{individualQuestion}</ul>
    </section>
  );
}

export default QuestionList;